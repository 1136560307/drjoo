import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { asset, navItems, site } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-link" to="/" onClick={() => setOpen(false)} aria-label="返回俏博士首页">
          <img src={asset('logo-drjoo.png')} alt="DR.JOO 俏博士" />
          <span>{site.subtitle}</span>
        </Link>
        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={open}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="主导航">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ '--item-index': index }}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)} style={{ '--item-index': navItems.length }}>
            联系合作
          </Link>
        </nav>
      </div>
    </header>
  );
}
