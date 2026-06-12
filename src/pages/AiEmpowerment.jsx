import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { aiModules, asset, careSteps } from '../data/siteData';

export default function AiEmpowerment() {
  return (
    <>
      <section className="sub-hero tech-hero">
        <div className="container two-col">
          <div><span className="eyebrow">AI ENABLEMENT</span><h1>AI不是噱头，而是门店每天用得上的内容中台</h1><p>俏博士将品牌资料、产品卖点、活动方案、门店案例和合规话术沉淀为AI工具，帮助加盟商降低选题、海报、脚本、朋友圈和企微跟进的执行难度。</p></div>
          <img src={asset('prototype-home-tech.webp')} alt="科技感首页原型" className="rounded-img" />
        </div>
      </section>
      <section className="section"><div className="container"><SectionTitle eyebrow="SCALP CARE SYSTEM" title="从护理路径到内容中台，形成门店可执行系统" desc="头皮评估、院线护理、居家巩固与客户跟进，都可以沉淀成门店标准化动作。"/><div className="step-grid">{careSteps.map((s)=><article className="step-card" key={s.no}><b>{s.no}</b><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
      <section className="section soft"><div className="container"><SectionTitle eyebrow="AI MODULES" title="AI六大模块：把总部资料变成门店可执行内容"/><div className="support-grid compact-grid">{aiModules.map(([title, desc])=><article className="support-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="section"><div className="container two-col"><div><SectionTitle eyebrow="DEMO" title="输入门店需求，输出可直接执行的内容与跟进动作" desc="以城市、人群痛点、活动目标和项目阶段为输入，生成选题、脚本、朋友圈文案、海报方向和企微跟进标签。"/><div className="prose-card"><p><b>示例选题：</b>30岁开始长白发，是不是只能反复染？</p><p><b>短视频脚本：</b>3秒痛点开场 + 头皮检测画面 + 护理体验 + 咨询引导。</p><p><b>企微标签：</b>白发困扰 / 油性头皮 / 初次咨询 / 待预约。</p></div></div><img src={asset('care-system-screen.webp')} alt="护理体系页面" className="rounded-img"/></div></section>
      <CtaBand title="申请AI门店赋能方案" desc="留下姓名、手机号、城市和咨询需求，招商顾问将说明AI内容中台、企微承接和门店素材支持方式。" button="申请AI赋能方案" />
    </>
  );
}
