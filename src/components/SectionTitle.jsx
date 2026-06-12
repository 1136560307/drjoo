export default function SectionTitle({ eyebrow, title, desc, centered = false }) {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {desc && <p>{desc}</p>}
    </div>
  );
}
