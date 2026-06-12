import { Link } from 'react-router-dom';

export default function CtaBand({ title = '获取俏博士品牌资料', desc = '提交姓名、手机号、城市和咨询需求，招商顾问将为你发送品牌、产品、门店合作与城市政策资料。', button = '联系招商顾问' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <Link to="/contact" className="btn primary">{button}</Link>
      </div>
    </section>
  );
}
