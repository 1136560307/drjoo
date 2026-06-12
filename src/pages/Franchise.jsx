import SectionTitle from '../components/SectionTitle';
import LeadForm from '../components/LeadForm';
import Accordion from '../components/Accordion';
import { asset, franchiseModes, process, supportItems } from '../data/siteData';

export default function Franchise() {
  const fit = ['新创业者', '养发馆', '美容院', '祛痘门店', '头皮管理门店'];
  const advantages = ['需求入口清晰', '项目逻辑完整', '产品组合明确', '投入路径灵活', '总部交付系统', '复购场景充足'];
  return (
    <>
      <section className="sub-hero franchise-hero">
        <div className="container two-col">
          <div><span className="eyebrow">FRANCHISE</span><h1>根据门店基础，选择适合你的俏博士合作模式</h1><p>无论你是想独立开设白发脱发中心，还是在原有美容院、养发馆、祛痘门店中导入新项目，俏博士都可根据城市、面积、团队和投入计划匹配合作路径。</p></div>
          <img src={asset('hero-prototype.webp')} alt="俏博士首页原型" className="rounded-img" />
        </div>
      </section>
      <section className="section"><div className="container"><SectionTitle eyebrow="WHO FITS" title="哪些门店适合导入俏博士"/><div className="tag-cloud">{fit.map((item)=><span key={item}>{item}</span>)}</div></div></section>
      <section className="section soft"><div className="container"><SectionTitle eyebrow="COOPERATION MODE" title="三种合作模式，按门店基础匹配导入路径"/><div className="trust-grid">{franchiseModes.map((mode)=><article className="trust-card" key={mode.title}><h3>{mode.title}</h3><p>{mode.desc}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="ADVANTAGES" title="六大项目优势：从需求到复购的完整链路"/><div className="support-grid compact-grid">{advantages.map((item, index)=><article className="support-card" key={item}><i>{String(index+1).padStart(2,'0')}</i><h3>{item}</h3><p>围绕顾客需求、项目交付、门店经营和长期复购形成可持续闭环。</p></article>)}</div></div></section>
      <section className="section soft"><div className="container"><SectionTitle eyebrow="SUPPORT" title="八大总部扶持：把复杂项目拆成门店动作"/><div className="support-grid compact-grid">{supportItems.map(([title,desc])=><article key={title} className="support-card"><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="PROCESS" title="从咨询到开业，再到巡店复盘的合作流程"/><div className="process-grid">{process.map((item, index)=><article key={item}><b>{String(index+1).padStart(2,'0')}</b><span>{item}</span></article>)}</div></div></section>
      <section className="section soft"><div className="container two-col"><SectionTitle eyebrow="FAQ" title="加盟常见问题" desc="围绕项目适合度、总部支持、合作模式和留资承接做基础解答。"/><Accordion /></div></section>
      <section className="section contact-section"><div className="container two-col"><SectionTitle eyebrow="APPLY" title="联系招商顾问，获取合作说明" desc="留下姓名、手机号、城市和咨询需求，招商顾问将发送对应的产品资料、合作模式、开业支持与项目导入建议。"/><LeadForm title="加盟咨询" /></div></section>
    </>
  );
}
