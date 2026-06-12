import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { storeZones, asset } from '../data/siteData';

export default function Project() {
  const flow = [
    ['统一形象', '让品牌识别、产品陈列和空间氛围保持一致，提升顾客初始印象。'],
    ['清晰动线', '让咨询、检测、护理、复查和居家巩固每一步都有明确位置与动作。'],
    ['舒适体验', '通过灯光、材质、隐私感和服务细节，提升顾客愿意停留与沟通的时间。'],
    ['承接复购', '用陈列、资料和跟进提醒，把到店护理自然延伸到居家产品和周期管理。'],
  ];
  return (
    <>
      <section className="sub-hero">
        <div className="container two-col">
          <div><span className="eyebrow">STORE DISPLAY</span><h1>把白发脱发护理做成顾客看得见的专业空间</h1><p>从门头识别、前台接待、咨询评估到护理服务和产品陈列，俏博士把白发脱发项目呈现为可参观、可体验、可持续服务的门店模型。</p></div>
          <img src={asset('prototype-store.webp')} alt="俏博士门店形象高保真页面" className="rounded-img" />
        </div>
      </section>
      <section className="section"><div className="container"><SectionTitle eyebrow="STORE MODEL" title="一眼看见项目如何进入真实门店" desc="高识别度门头、清晰分区、专业接待和标准护理动线，让顾客与合作伙伴直观看到项目的服务场景。"/><div className="store-grid">{storeZones.map((zone)=><article className="store-card" key={zone.title}><img src={zone.image} alt={zone.title}/><div><h3>{zone.title}</h3><p>{zone.text}</p></div></article>)}</div></div></section>
      <section className="section soft"><div className="container two-col"><img src={asset('store-service.webp')} alt="俏博士护理服务区" className="rounded-img"/><div><SectionTitle eyebrow="SERVICE FLOW" title="从进店咨询到居家巩固的服务动线" desc="用清晰动线帮助顾客理解护理步骤，也让服务团队更容易按照统一标准完成接待、说明、护理和回访。"/><div className="mode-list">{flow.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="SUPPORT SYSTEM" title="空间只是入口，真正支撑门店的是背后的项目系统"/><div className="trust-grid">{['研发支持','案例支持','培训支持','运营支持'].map((item)=><article className="trust-card" key={item}><h3>{item}</h3><p>围绕产品组合、护理记录、标准课程与巡店复盘，持续支撑门店执行。</p></article>)}</div></div></section>
      <CtaBand title="联系招商顾问，获取门店空间参考方案" desc="提交姓名、手机号、城市和咨询需求，获取适合你的门头、陈列、咨询区和项目导入建议。" />
    </>
  );
}
