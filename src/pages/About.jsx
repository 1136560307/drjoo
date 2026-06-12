import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { asset, supportItems } from '../data/siteData';

export default function About() {
  const values = [
    ['专业有据', '用产品资料、检测报告、门店流程和标准化话术支撑项目表达，让一线沟通更清晰。'],
    ['长期主义', '头皮毛发管理不是一次性消费，俏博士更重视周期跟踪、居家巩固和持续复购。'],
    ['门店共生', '品牌价值不只在总部，而在每一家门店能不能真正用起来、讲出去、做持续。'],
  ];
  const timeline = [
    ['2023', '项目立项', '围绕白发养护、发根强韧与头皮环境管理启动产品和服务模型探索。'],
    ['2024', '门店测试', '结合一线咨询、护理反馈和复购需求，持续优化产品组合、讲解资料与服务流程。'],
    ['2025', '系统定型', '形成更适合门店导入的院线护理、居家巩固、培训SOP与总部赋能方案。'],
  ];
  return (
    <>
      <section className="sub-hero">
        <div className="container two-col">
          <div>
            <span className="eyebrow">ABOUT DR.JOO</span>
            <h1>从产品到项目，俏博士专注白发脱发的长期管理</h1>
            <p>俏博士将草本养护思路、现代头皮管理理念、院线护理产品、居家巩固产品和门店运营系统相结合，为门店提供更容易落地的白发脱发项目解决方案。</p>
            <Link to="/franchise" className="btn primary">了解加盟合作</Link>
          </div>
          <img src={asset('store-front-desk.webp')} alt="俏博士前台形象" className="rounded-img" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <SectionTitle centered eyebrow="BRAND STORY" title="从单次体验，到周期护理" />
          <div className="prose-card">
            <p>白发、脱发、头油、头屑、头痒、发丝脆弱，正在成为更广泛年龄层的长期焦虑。真正难的不是顾客有没有需求，而是门店能不能把需求讲清楚、把服务做标准、把效果做记录、把复购做持续。</p>
            <p>俏博士围绕这些经营难题建立品牌系统：用院线套盒承接专业护理，用居家产品承接日常巩固，用培训SOP降低员工学习成本，用内容与AI工具帮助门店持续触达本地客户。</p>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle eyebrow="VALUES" title="我们坚持的三件事" />
          <div className="trust-grid">
            {values.map(([title, text]) => <article key={title} className="trust-card"><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="R&D" title="研发历程" desc="从产品研发到服务模型，从门店测试到资料体系，俏博士围绕长期落地持续迭代。" />
          <div className="timeline">
            {timeline.map(([year, title, text]) => <article key={year}><b>{year}</b><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle eyebrow="HEADQUARTERS" title="让门店少走弯路，是总部系统的价值" />
          <div className="support-grid compact-grid">
            {supportItems.map(([title, desc]) => <article key={title} className="support-card"><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>
      <CtaBand title="想把白发脱发项目导入你的门店？" desc="提交城市、门店面积与现有经营基础，获取更适合你的合作路径与导入建议。" />
    </>
  );
}
