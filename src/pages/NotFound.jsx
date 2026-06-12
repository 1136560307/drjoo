import { Link } from 'react-router-dom';
export default function NotFound() {
  return <section className="sub-hero small-hero"><div className="container"><span className="eyebrow">404</span><h1>页面未找到</h1><p>你访问的页面暂时不存在，建议返回首页或联系俏博士招商顾问。</p><Link to="/" className="btn primary">返回首页</Link></div></section>;
}
