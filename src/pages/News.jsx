import { Link, useParams, useLocation } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CtaBand from '../components/CtaBand';
import { news } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

export default function News({ category }) {
  const { slug } = useParams();
  const location = useLocation();
  const article = slug ? news.find((item) => item.slug === slug) : null;
  useSeo(location.pathname, article ? { title: `${article.title}｜俏博士 DR.JOO`, description: article.summary } : undefined);

  if (slug) {
    if (!article) return <section className="sub-hero"><div className="container"><h1>文章不存在</h1><Link to="/news" className="btn primary">返回新闻资讯</Link></div></section>;
    return (
      <>
        <article className="article-page">
          <div className="container narrow">
            <Link to="/news" className="back-link">← 返回新闻资讯</Link>
            <span className="eyebrow">{article.category} · {article.date}</span>
            <h1>{article.title}</h1>
            <p className="lead">{article.summary}</p>
            <div className="article-body">{article.content.map((p)=><p key={p}>{p}</p>)}</div>
          </div>
        </article>
        <CtaBand />
      </>
    );
  }

  const list = category ? news.filter((item) => item.category.includes(category)) : news;
  return (
    <>
      <section className="sub-hero small-hero"><div className="container"><span className="eyebrow">NEWS CENTER</span><h1>品牌资讯</h1><p>持续更新品牌动态、产品科普、门店案例与加盟答疑，让访问者在官网直接了解项目逻辑与品牌进展。</p></div></section>
      <section className="section"><div className="container"><SectionTitle title="最新文章"/><div className="news-grid">{list.map((item)=><Link className="news-card" to={`/news/${item.slug}`} key={item.slug}><span>{item.category} · {item.date}</span><h3>{item.title}</h3><p>{item.summary}</p></Link>)}</div></div></section>
    </>
  );
}
