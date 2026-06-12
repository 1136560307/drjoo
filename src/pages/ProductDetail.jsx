import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import CtaBand from '../components/CtaBand';
import SectionTitle from '../components/SectionTitle';
import { products } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  useSeo(`/products/${id || ''}`, product
    ? {
      title: `${product.name}｜产品详情｜俏博士 DR.JOO`,
      description: product.desc,
    }
    : {
      title: '产品不存在｜俏博士 DR.JOO',
      description: '当前产品页面暂时无法访问，建议返回产品体系页查看俏博士产品资料。',
    });

  if (!product) {
    return (
      <section className="sub-hero small-hero">
        <div className="container">
          <span className="eyebrow">PRODUCT DETAIL</span>
          <h1>产品不存在</h1>
          <p>当前产品页面暂时无法访问，建议返回产品体系页查看其他俏博士产品资料。</p>
          <Link to="/products" className="btn primary">返回产品体系</Link>
        </div>
      </section>
    );
  }

  const related = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);

  return (
    <>
      <section className="product-detail-hero">
        <div className="container product-detail-layout">
          <div className="product-detail-copy">
            <Link to="/products" className="back-link">
              <ArrowLeft size={18} strokeWidth={1.8} />
              返回产品体系
            </Link>
            <span className="eyebrow">{product.tag}</span>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <div className="product-meta-row">
              <span>{product.spec}</span>
              <span>{product.role}</span>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn primary">咨询产品资料</Link>
              <Link to={product.category === 'professional' ? '/all-product/27taohe/' : '/all-product/27danpin/'} className="btn ghost">
                查看同类产品
              </Link>
            </div>
          </div>
          <div className="product-detail-media">
            <img src={product.poster} alt={product.name} className="product-detail-poster" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-detail-grid">
          <article className="product-detail-card">
            <span>SCENE</span>
            <h3>适用场景</h3>
            <p>{product.scene}</p>
          </article>
          <article className="product-detail-card">
            <span>ROLE</span>
            <h3>产品定位</h3>
            <p>{product.role}</p>
          </article>
          <article className="product-detail-card">
            <span>SPEC</span>
            <h3>产品规格</h3>
            <p>{product.spec}</p>
          </article>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container two-col product-detail-deep">
          <div>
            <SectionTitle
              eyebrow="HIGHLIGHTS"
              title="产品卖点与<span>门店沟通重点</span>"
              desc="把海报里的产品信息转化成门店更容易讲清楚的场景、卖点和护理路径。"
            />
            <div className="highlight-list">
              {product.highlights.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={20} strokeWidth={1.7} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="usage-panel">
            <span className="eyebrow">CARE FLOW</span>
            <h3>建议服务节点</h3>
            {product.usage.map((item, index) => (
              <article key={item}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="GALLERY" title="产品海报与<span>展示素材</span>" />
          <div className="product-gallery-grid">
            {product.gallery.map((image) => (
              <img src={image} alt={`${product.name}展示素材`} key={image} />
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section surface-section">
          <div className="container">
            <SectionTitle eyebrow="RELATED" title="同类产品" />
            <div className="product-grid details-grid">
              {related.map((item) => (
                <Link className="product-card product-card-link" to={item.detailPath} key={item.id}>
                  <div className="product-image"><img src={item.poster} alt={item.name} /></div>
                  <span>{item.tag}</span>
                  <h3>{item.name}</h3>
                  <b>{item.spec}</b>
                  <p>{item.scene}</p>
                  <em>查看详情 <ArrowRight size={16} strokeWidth={1.8} /></em>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="需要完整产品资料与门店导入建议？" desc="提交城市、门店类型与咨询需求，品牌顾问将提供产品资料、合作模式与产品陈列建议。" button="联系品牌顾问" />
    </>
  );
}
