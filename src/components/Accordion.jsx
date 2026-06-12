import { useState } from 'react';
import { faqs } from '../data/siteData';

export default function Accordion({ items = faqs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <article key={item.q} className={`faq-item ${active === index ? 'open' : ''}`}>
          <button onClick={() => setActive(active === index ? -1 : index)}>
            <span>{item.q}</span>
            <b>{active === index ? '－' : '＋'}</b>
          </button>
          {active === index && <p>{item.a}</p>}
        </article>
      ))}
    </div>
  );
}
