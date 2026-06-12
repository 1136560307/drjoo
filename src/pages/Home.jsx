import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Boxes,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  MapPinned,
  Megaphone,
  PackageCheck,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ProductPosterCarousel from '../components/ProductPosterCarousel';
import SectionTitle from '../components/SectionTitle';
import {
  asset,
  careSteps,
  certificates,
  documentProofPosters,
  featuredProductPosters,
  heroStats,
  kitProductPosters,
  partnerTypes,
  productLoopItems,
  proofCards,
  storeZones,
  supportItems,
  trustCards,
} from '../data/siteData';

const partnerIcons = [Building2, Store, Sparkles, UserRound];
const supportIcons = [Megaphone, GraduationCap, CalendarCheck, MapPinned, Palette, Boxes, RefreshCw, ShieldCheck];
const heroProofItems = [
  { Icon: Sparkles, title: '科研实力', text: '专注配方研发，科技赋能养发' },
  { Icon: ClipboardCheck, title: '非遗传承', text: '传承非遗文化，匠心养发智慧' },
  { Icon: ShieldCheck, title: '品质保障', text: '严选优质原料，安心有效养护' },
];
const homeStats = [
  { Icon: Store, value: '400+', label: '全国连锁门店' },
  { Icon: UserRound, value: '1000万+', label: '服务客户' },
  { Icon: ShieldCheck, value: '98%', label: '客户满意度' },
  { Icon: PackageCheck, value: '15年+', label: '科研专注' },
];

function ArrowButton({ to, children, variant = 'primary' }) {
  return (
    <Link to={to} className={`btn ${variant}`}>
      <span>{children}</span>
      <span className="btn-icon" aria-hidden="true">
        <ArrowRight size={18} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

function Hero() {
  return (
    <section className="home-hero reference-hero">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-tech-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal-stack">
          <div className="hero-pill">
            <ShieldCheck size={16} strokeWidth={1.45} />
            <span>专注白发脱发 · 科学养发护发</span>
          </div>
          <h1>
            <span className="hero-title-main">科学白发养护专家</span>
            <span className="hero-title-accent">专注白发脱发研究与服务</span>
          </h1>
          <p className="hero-value-line">非遗传承 × 科研创新 × 匠心品质</p>
          <p className="hero-sub">
            为千万家庭提供专业、安心、有效的养发解决方案；也为合作门店建立从头皮评估、院线护理到居家巩固的长期服务路径。
          </p>
          <div className="hero-actions">
            <ArrowButton to="/contact">获取品牌资料</ArrowButton>
            <ArrowButton to="/franchise" variant="ghost">咨询合作模式</ArrowButton>
          </div>
          <div className="hero-proof-cards">
            {heroProofItems.map(({ Icon, title, text }) => (
              <article className="hero-proof-card" key={title}>
                <span className="hero-proof-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.35} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual-shell reference-store-stage">
          <div className="hero-visual-card">
            <img src={asset('hero-store-fade-bottom.webp')} alt="俏博士门店形象与白发脱发中心门头" />
            <div className="hero-dashboard-card" aria-label="头皮健康检测系统数据卡">
              <span>SCALP CARE SYSTEM</span>
              <strong>头皮健康检测系统</strong>
              <div className="dashboard-rings">
                <i />
                <b>98%</b>
              </div>
              <p>养护记录 · 周期管理 · 门店复查</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container home-stat-band">
        {homeStats.map(({ Icon, value, label }) => (
          <article className="home-stat-card" key={label}>
            <span className="home-stat-icon" aria-hidden="true">
              <Icon size={25} strokeWidth={1.35} />
            </span>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>

      <div className="container evidence-strip home-evidence-strip">
        {heroStats.map((stat) => (
          <article className="evidence-pill" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section surface-section">
      <div className="container">
        <SectionTitle
          eyebrow="BRAND TRUST"
          title="让白发脱发护理从单次体验变成<span>系统服务</span>"
          desc="官网首页不只展示品牌资料，而是把顾客为什么信任、门店为什么能导入、产品为什么能延续服务讲清楚。"
        />
        <div className="premium-grid trust-grid-v2">
          {trustCards.map((card, index) => (
            <article className="premium-card" key={card.title}>
              <span className="card-kicker">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerFit() {
  return (
    <section className="section partner-section">
      <div className="container">
        <SectionTitle
          centered
          eyebrow="WHO FITS"
          title="适合这些门店与创业者<span>导入合作</span>"
          desc="把合作对象说清楚，让访问者快速判断自己是否适合俏博士白发脱发护理项目。"
        />
        <div className="partner-grid">
          {partnerTypes.map((item, index) => {
            const Icon = partnerIcons[index % partnerIcons.length];
            return (
              <article className="partner-card" key={item.title}>
                <span className="partner-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.55} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <b>{item.fit}</b>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CarePath() {
  return (
    <section className="section care-path-section">
      <div className="container care-path-layout">
        <div>
          <SectionTitle
            eyebrow="CARE PATH"
            title="从头皮评估到居家巩固，建立<span>长期护理路径</span>"
            desc="把顾客能理解的护理步骤放在前面，让门店团队更容易介绍，也让产品组合更自然地进入服务闭环。"
          />
          <ArrowButton to="/products">查看产品服务体系</ArrowButton>
        </div>
        <div className="care-path-grid">
          {careSteps.map((step) => (
            <article className="process-card" key={step.no}>
              <b>{step.no}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductLoop() {
  return (
    <section className="section surface-section">
      <div className="container">
        <SectionTitle
          eyebrow="PRODUCT LOOP"
          title="让产品从到店护理延伸到<span>居家巩固</span>"
          desc="围绕院线护理、居家巩固和陈列沟通资料，建立门店可讲、顾客可理解、服务可持续的产品闭环。"
        />
        <div className="product-loop-grid">
          {productLoopItems.map((item) => (
            <article className="product-loop-card" key={item.title}>
              <div className="product-loop-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="center-actions">
          <ArrowButton to="/products">探索产品体系</ArrowButton>
        </div>
      </div>
    </section>
  );
}

function ProductPosters() {
  return (
    <section className="section poster-showcase-section">
      <div className="container">
        <SectionTitle
          eyebrow="PRODUCT POSTERS"
          title="用真实产品海报呈现<span>护理产品矩阵</span>"
          desc="首页展示你已提供的产品海报素材，合作用户可以直接点击产品名称或海报进入详细产品页面，了解规格、场景与护理路径。"
        />
        <ProductPosterCarousel items={featuredProductPosters} />
      </div>
    </section>
  );
}

function KitPosters() {
  return (
    <section className="section kit-poster-section">
      <div className="container">
        <SectionTitle
          eyebrow="KIT POSTERS"
          title="三大套盒海报轮播，突出<span>院线护理组合</span>"
          desc="把已经上传的套盒产品海报集中展示，轮播自动向右推进；访客点击海报或产品名称，可直接进入对应产品详情页。"
        />
        <ProductPosterCarousel items={kitProductPosters} label="三大套盒海报轮播" auto autoDirection="right" interval={3200} />
      </div>
    </section>
  );
}

function StoreProof() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          centered
          eyebrow="REAL STORE"
          title="用真实门店形象建立<span>落地信任</span>"
          desc="让合作用户看到项目可以如何进入空间、如何陈列、如何服务，而不是只停留在品牌概念。"
        />
        <div className="store-grid-v2">
          {storeZones.map((zone) => (
            <article className="store-proof-card" key={zone.title}>
              <img src={zone.image} alt={zone.title} />
              <div>
                <h3>{zone.title}</h3>
                <p>{zone.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="proof-row">
          {proofCards.map((card) => (
            <article className="proof-card" key={card.title}>
              <ClipboardCheck size={24} strokeWidth={1.55} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="cert-grid cert-grid-featured">
          {certificates.map((cert) => (
            <article key={cert.title} className="cert-card">
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentProofCarousel() {
  return (
    <section className="section document-proof-section">
      <div className="container">
        <SectionTitle
          eyebrow="PATENT & REPORT"
          title="专利证书与检测报告封面<span>循环展示</span>"
          desc="将专利证书、检测报告等信任资料做成可浏览的封面轮播，专利卡片可直接打开 PDF 资料，检测报告入口统一进入科研实力页面。"
        />
        <ProductPosterCarousel
          items={documentProofPosters}
          label="专利证书与检测报告封面轮播"
          auto
          autoDirection="right"
          interval={3600}
          variant="document"
        />
      </div>
    </section>
  );
}

function SupportSystem() {
  return (
    <section className="section support-system-section">
      <div className="container">
        <SectionTitle
          eyebrow="HEADQUARTERS SUPPORT"
          title="用总部支持降低<span>门店导入难度</span>"
          desc="从内容、课程、开业、空间、视觉、物料、巡店到产品迭代，让合作伙伴不是只拿到产品，而是拿到一套可执行系统。"
        />
        <div className="support-system-grid">
          {supportItems.map(([title, text], index) => {
            const Icon = supportIcons[index % supportIcons.length];
            return (
              <article className="support-system-card" key={title}>
                <span className="support-system-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.55} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionTitle
            eyebrow="CONTACT"
            title="获取俏博士<span>品牌资料</span>"
            desc="提交姓名、手机、城市和咨询需求，品牌顾问将提供品牌介绍、产品资料、门店合作模式与城市合作政策说明。"
          />
          <div className="contact-points">
            <span><Handshake size={17} /> 合作模式说明</span>
            <span><PackageCheck size={17} /> 产品资料获取</span>
            <span><ShieldCheck size={17} /> 城市政策咨询</span>
          </div>
        </div>
        <div className="consult-card">
          <LeadForm title="联系品牌顾问" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <PartnerFit />
      <CarePath />
      <ProductLoop />
      <KitPosters />
      <ProductPosters />
      <StoreProof />
      <DocumentProofCarousel />
      <SupportSystem />
      <ContactBlock />
    </>
  );
}
