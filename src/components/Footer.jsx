import { Link } from 'react-router-dom';
import { site } from '../data/siteData';

export default function Footer() {
  const groups = [
    { title: '产品中心', links: [['产品体系', '/products'], ['居家护理单品', '/all-product/27danpin/'], ['院线套盒方案', '/all-product/27taohe/']] },
    { title: '品牌与实力', links: [['关于俏博士', '/about_drjoo'], ['科研实力', '/brand-strength'], ['门店案例', '/cases']] },
    { title: '合作支持', links: [['护理体系', '/ai-empowerment'], ['合作加盟', '/franchise'], ['联系我们', '/contact']] },
  ];
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{site.brand}</h3>
          <p>{site.slogan}</p>
          <p>专注白发脱发护理与头皮养护，为门店提供产品、项目、课程、形象和运营支持。</p>
        </div>
        {groups.map((group) => (
          <div key={group.title} className="footer-links">
            <h4>{group.title}</h4>
            {group.links.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
          </div>
        ))}
        <div className="footer-contact">
          <h4>联系我们</h4>
          <strong>{site.phone}</strong>
          <span>{site.serviceTime}</span>
          <span>{site.email}</span>
          <span>{site.address}</span>
        </div>
      </div>
      <div className="container footer-bottom">{site.copyright}</div>
    </footer>
  );
}
