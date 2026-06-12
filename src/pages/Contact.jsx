import SectionTitle from '../components/SectionTitle';
import LeadForm from '../components/LeadForm';
import { site } from '../data/siteData';

export default function Contact() {
  return (
    <section className="section contact-section page-contact">
      <div className="container two-col">
        <div>
          <SectionTitle eyebrow="CONTACT" title="获取俏博士品牌资料" desc="提交姓名、手机号、城市和咨询需求，招商顾问将为你发送品牌、产品、门店合作与城市政策资料。" />
          <div className="contact-cards">
            <article><span>全国服务热线</span><strong>{site.phone}</strong></article>
            <article><span>商务邮箱</span><strong>{site.email}</strong></article>
            <article><span>服务时间</span><strong>{site.serviceTime}</strong></article>
            <article><span>服务区域</span><strong>{site.address}</strong></article>
          </div>
        </div>
        <LeadForm title="联系招商顾问" />
      </div>
    </section>
  );
}
