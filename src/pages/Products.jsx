import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { products } from '../data/siteData';

function ProductCard({ product }) {
  return (
    <Link className="product-card product-card-link" to={product.detailPath}>
      <div className="product-image">
        <img src={product.poster} alt={product.name} />
      </div>
      <span>{product.tag}</span>
      <h3>{product.name}</h3>
      <b>{product.spec}</b>
      <p>{product.scene}</p>
      <em>
        查看详情
        <ArrowRight size={16} strokeWidth={1.8} />
      </em>
    </Link>
  );
}

export default function Products() {
  const overview = [
    ['院线护理', '用精华类产品承接评估、体验、周期方案和护理反馈。'],
    ['居家巩固', '把门店护理后的管理动作延伸到家庭场景，形成连续护理。'],
    ['洗护辅助', '覆盖清洁、蓬松、控油和发丝修护等日常高频触点。'],
    ['海报资料', '用真实产品海报帮助合作用户快速理解产品定位和陈列效果。'],
  ];
  const professionalProducts = products.filter((product) => product.category === 'professional');
  const homeCareProducts = products.filter((product) => product.category === 'home');

  return (
    <>
      <section className="sub-hero product-hero">
        <div className="container two-col">
          <div>
            <span className="eyebrow">PRODUCT SYSTEM</span>
            <h1>先看产品海报，再进入详情了解护理场景</h1>
            <p>俏博士产品体系围绕白发养护、防断强韧、头皮臻养和洗护修护展开。每个产品都提供海报素材、产品名称、规格、适用场景和服务节点说明。</p>
            <div className="hero-actions">
              <Link to="/all-product/27taohe/" className="btn primary">查看院线产品</Link>
              <Link to="/all-product/27danpin/" className="btn ghost">查看居家产品</Link>
            </div>
          </div>
          <img src={products[0].poster} alt={products[0].name} className="rounded-img product-hero-poster" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="PRODUCT OVERVIEW" title="产品不是孤立陈列，而是围绕专业护理场景设计" desc="从咨询检测到院线护理，从首次体验到居家巩固，俏博士把不同产品放进同一套服务逻辑中。" />
          <div className="trust-grid">{overview.map(([title, text]) => <article className="trust-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle eyebrow="PRODUCT POSTERS" title="产品海报目录" desc="点击任意产品海报或产品名称，进入对应产品详情页。" />
          <div className="product-grid details-grid">
            {products.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="PROFESSIONAL LINE" title="院线专业护理系列" desc="适合门店评估、护理体验和周期方案中的专业服务表达。" />
          <div className="product-grid details-grid">
            {professionalProducts.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle eyebrow="HOME CARE" title="居家巩固与洗护补充" desc="把门店护理后的管理动作延伸到家庭场景，用精华、洗发水与护发膜覆盖更高频的日常洗护辅助触点。" />
          <div className="product-grid">
            {homeCareProducts.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="EVIDENCE" title="产品证据链资料" />
          <div className="support-grid compact-grid">{['产品海报素材', '产品高清展示图', '院线护理流程', '居家巩固说明', '产品陈列参考', '门店沟通重点'].map((item) => <article className="support-card" key={item}><h3>{item}</h3><p>用于品牌介绍、产品说明、产品陈列和顾客答疑中的基础资料。</p></article>)}</div>
        </div>
      </section>
      <CtaBand title="需要完整产品检测与合作资料？" desc="提交信息后获取院线产品、居家单品、产品海报、陈列参考和合作模式说明。" button="联系品牌顾问" />
    </>
  );
}
