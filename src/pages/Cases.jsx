import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { cases, products, asset } from '../data/siteData';

export default function Cases() {
  return (
    <>
      <section className="sub-hero"><div className="container two-col"><div><span className="eyebrow">STORE CASES</span><h1>用场景讲清项目，用产品组合承接长期护理</h1><p>把顾客问题拆成头顶稀疏、发缝白发、出油扁塌、烫染受损四类场景，并匹配门店可讲、可做、可跟进、可复购的产品组合。</p></div><img src={asset('store-service-2.webp')} alt="俏博士护理服务场景" className="rounded-img" /></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="SCENARIOS" title="四类问题场景与推荐搭配" desc="案例图呈现阶段记录，产品图呈现门店搭配方案，帮助客户快速理解不同问题场景背后的项目组合。"/><div className="case-grid">{cases.map(([title, text], i)=><article key={title} className="case-card"><img src={products[i % products.length].image} alt={title}/><div><span>场景 {String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><b>建议搭配：{products[i % products.length].name}</b></div></article>)}</div></div></section>
      <CtaBand title="获取门店案例与导入路径" desc="提交信息后获取适合你门店类型的项目导入建议、产品组合和服务动线参考。" />
    </>
  );
}
