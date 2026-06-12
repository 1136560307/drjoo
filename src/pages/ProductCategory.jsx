import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { products } from '../data/siteData';

function ProductCard({ product }) {
  return (
    <Link key={product.id} className="product-card detail product-card-link" to={product.detailPath}>
      <div className="product-image"><img src={product.poster} alt={product.name} /></div>
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

export default function ProductCategory({ type }) {
  const isHome = type === 'home';
  const list = products.filter((product) => product.category === (isHome ? 'home' : 'professional'));
  return (
    <>
      <section className="sub-hero small-hero">
        <div className="container">
          <span className="eyebrow">{isHome ? 'HOME CARE' : 'PROFESSIONAL LINE'}</span>
          <h1>{isHome ? '俏博士 · 居家护理单品' : '俏博士 · 院线护理产品'}</h1>
          <p>{isHome ? '围绕白发养护、防断强韧、头皮臻养和日常洗护，展示产品定位与适用场景。' : '聚焦院线护理方向，展示产品海报、产品定位与适用场景。'}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle title={isHome ? '居家巩固产品' : '院线专业护理产品'} desc={isHome ? '适合门店护理后的日常巩固和长期护理承接。' : '产品不是单纯陈列，而是服务流程中的专业载体。'} />
          <div className="product-grid details-grid">
            {list.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>
      {!isHome && (
        <section className="section soft"><div className="container"><SectionTitle eyebrow="STORE SOP" title="门店落地SOP" /><div className="timeline">{['检测咨询', '项目讲解', '院线护理', '过程记录', '居家巩固', '复查跟进', '持续管理'].map((item, i) => <article key={item}><b>{String(i+1).padStart(2,'0')}</b><h3>{item}</h3><p>把护理动作拆成门店可执行、顾客可理解的服务节点。</p></article>)}</div></div></section>
      )}
      <CtaBand />
    </>
  );
}
