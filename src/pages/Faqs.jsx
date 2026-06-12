import SectionTitle from '../components/SectionTitle';
import Accordion from '../components/Accordion';
import CtaBand from '../components/CtaBand';

export default function Faqs() {
  return (
    <>
      <section className="sub-hero small-hero"><div className="container"><span className="eyebrow">FAQS</span><h1>百问百答</h1><p>围绕俏博士项目、加盟、产品、AI赋能和留资承接的常见问题。</p></div></section>
      <section className="section"><div className="container narrow"><SectionTitle centered title="常见问题"/><Accordion /></div></section>
      <CtaBand />
    </>
  );
}
