import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

function isAssetLink(href = '') {
  return /^https?:\/\//.test(href) || href.startsWith('/assets/') || /\.(pdf|png|jpe?g|webp)$/i.test(href);
}

function PosterCard({ item, variant }) {
  const className = `poster-slide ${variant === 'document' ? 'document-slide' : ''}`;
  const media = item.image ? (
    <img src={item.image} alt={item.title} />
  ) : (
    <div className="document-cover" aria-label={`${item.title}封面`}>
      <span>{item.coverLabel || item.tag}</span>
      <strong>{item.title}</strong>
      <em>{item.spec}</em>
    </div>
  );
  const content = (
    <>
      <span className="poster-tag">{item.tag}</span>
      {media}
      <div className="poster-slide-copy">
        <div>
          <h3>{item.title}</h3>
          <p>{item.spec}</p>
        </div>
        <span className="poster-link" aria-hidden="true">
          <ArrowRight size={18} strokeWidth={1.8} />
        </span>
      </div>
    </>
  );

  if (!item.href) {
    return (
      <article className={className} key={item.title}>
        {content}
      </article>
    );
  }

  if (isAssetLink(item.href)) {
    const isPdf = item.href.toLowerCase().endsWith('.pdf');
    return (
      <a className={className} href={item.href} target={isPdf ? '_blank' : undefined} rel={isPdf ? 'noreferrer' : undefined} key={item.href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={item.href} key={item.href}>
      {content}
    </Link>
  );
}

export default function ProductPosterCarousel({
  items,
  label = '产品海报轮播',
  auto = false,
  autoDirection = 'right',
  interval = 3600,
  variant = 'product',
}) {
  const trackRef = useRef(null);
  const stepDirection = autoDirection === 'left' ? -1 : 1;

  function scroll(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.poster-slide');
    const distance = card ? card.getBoundingClientRect().width + 18 : track.clientWidth * 0.82;
    const maxScroll = track.scrollWidth - track.clientWidth - 8;

    if (maxScroll <= 0) return;
    if (direction > 0 && track.scrollLeft + distance >= maxScroll) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (direction < 0 && track.scrollLeft - distance <= 0) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' });
      return;
    }

    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  }

  useEffect(() => {
    if (!auto || items.length < 2) return undefined;
    const timer = window.setInterval(() => scroll(stepDirection), interval);
    return () => window.clearInterval(timer);
  }, [auto, interval, items.length, stepDirection]);

  return (
    <div className={`poster-carousel poster-carousel-${variant}`} aria-label={label}>
      <div className="poster-carousel-controls">
        <button type="button" onClick={() => scroll(-1)} aria-label="上一组轮播内容">
          <ChevronLeft size={22} strokeWidth={1.7} />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="下一组轮播内容">
          <ChevronRight size={22} strokeWidth={1.7} />
        </button>
      </div>
      <div className="poster-track" ref={trackRef}>
        {items.map((item) => (
          <PosterCard item={item} variant={variant} key={item.href || item.title} />
        ))}
      </div>
    </div>
  );
}
