import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { asset, certificates } from '../data/siteData';

export default function BrandStrength() {
  const trust = [
    ['品牌层', '品牌定位、荣誉资质与文化背书，帮助顾客和加盟商建立初始印象。'],
    ['产品层', '检测资料、流通报告、产品图文与成分说明，支撑更专业的产品认知。'],
    ['门店层', '门头、空间、陈列、咨询区和护理动线，让项目落地形态可感知。'],
    ['服务层', '培训支持、服务流程、内容支持和巡店复盘，让合作伙伴持续提升服务能力。'],
  ];
  const reports = ['防断发功效检测报告', '修护功效检测报告', '舒缓功效检测报告', '控油功效检测报告', '产品流通报告', '专利与备案资料'];
  return (
    <>
      <section className="sub-hero dark-hero">
        <div className="container two-col">
          <div>
            <span className="eyebrow">BRAND STRENGTH</span>
            <h1>品牌实力不是口号，而是一条完整的信任链</h1>
            <p>俏博士通过品牌荣誉、冠军合作、产品检测资料、实体门店、服务流程和总部扶持，构建顾客看得见、合作伙伴更容易理解的信任体系。</p>
          </div>
          <img src={asset('prototype-tech-dark.webp')} alt="科技感品牌首页原型" className="rounded-img" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="TRUST STRUCTURE" title="从品牌到产品，每一层信任都要有依据" />
          <div className="trust-grid">
            {trust.map(([title, text]) => <article key={title} className="trust-card"><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle centered eyebrow="CERTIFICATES" title="用资质资料建立基础信任" desc="证书和荣誉的价值，不只是放在页面上展示，更是帮助消费者和合作伙伴理解品牌基础。" />
          <div className="cert-grid">
            {certificates.map((cert) => <article key={cert.title} className="cert-card"><img src={cert.image} alt={cert.title}/><h3>{cert.title}</h3><p>{cert.desc}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionTitle eyebrow="FLAGSHIP MODEL" title="实体门店可见，服务场景可感知" desc="通过外立面、前台、咨询区、护理区、产品陈列和标准化流程，让合作伙伴直观看到项目如何进入真实门店。" />
            <div className="badge-row"><span>门头</span><span>前台</span><span>产品陈列</span><span>咨询区</span><span>护理空间</span></div>
          </div>
          <img src={asset('store-front-original.webp')} alt="俏博士长沙旗舰店门头" className="rounded-img" />
        </div>
      </section>
      <section className="section soft">
        <div className="container two-col">
          <img src={asset('champions-group.webp')} alt="俏博士冠军合作形象" className="rounded-img" />
          <div>
            <SectionTitle eyebrow="CHAMPION BRAND" title="以冠军精神，传递健康、自信与长期坚持" desc="冠军合作形象用于品牌传播，也强化俏博士长期主义、专业坚持、健康自信的品牌态度。" />
            <div className="mode-list">
              <article><h3>女子排球冠军</h3><p>以体坛冠军形象传递健康、自信与长期坚持的品牌态度。</p></article>
              <article><h3>女子足球冠军</h3><p>强化品牌公开背书，帮助消费者与合作伙伴建立初步信任。</p></article>
              <article><h3>艺术体操亚洲冠军</h3><p>用于品牌活动和内容传播中的形象展示。</p></article>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="REPORTS" title="让产品说明从“感觉不错”变成“检测有据”" desc="俏博士将检测报告、流通资料、产品图片和使用场景整理为资料体系，让产品介绍更有依据。" />
          <div className="tag-cloud">{reports.map((r) => <span key={r}>{r}</span>)}</div>
        </div>
      </section>
      <CtaBand title="获取品牌资质与产品检测资料" desc="提交合作意向后，由招商顾问发送品牌资质、产品检测资料、门店模型和合作政策说明。" />
    </>
  );
}
