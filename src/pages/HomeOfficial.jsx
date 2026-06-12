import { Link } from 'react-router-dom';
import {
  ArrowRight,
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
  Store,
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ProductPosterCarousel from '../components/ProductPosterCarousel';
import SectionTitle from '../components/SectionTitle';
import { asset, careSteps, certificates, featuredProductPosters, kitProductPosters, proofCards, storeZones } from '../data/siteData';
import '../home-upgrade.css';

function ArrowButton({ to, children, variant = 'primary' }) {
  return <Link to={to} className={`btn ${variant}`}><span>{children}</span><span className="btn-icon"><ArrowRight size={18} strokeWidth={1.8} /></span></Link>;
}

const officialTrustCards = [
  ['白发脱发专项定位', '聚焦白发、脱发、头油头屑、发丝脆弱等常见头皮毛发困扰，围绕消费者真实需求建立品牌服务方向。'],
  ['东方草本与现代科技结合', '以东方草本养护理念为基础，融合现代头皮护理思路，构建更系统的产品表达和护理体验。'],
  ['院线护理到居家巩固', '院线套盒承接专业体验，居家产品延续日常护理，帮助顾客建立长期养护认知。'],
  ['标准化门店体验模型', '从门店形象、咨询评估、护理服务到产品陈列，形成可参观、可体验、可持续服务的品牌门店模型。'],
];

const partners = [
  ['美容院 / 皮肤管理门店', '适合已有顾客基础，希望增加头皮护理、白发脱发管理等新增服务场景的门店。'],
  ['养发馆 / 头皮管理门店', '适合希望升级品牌形象、完善产品体系、提升专业表达与内容传播能力的养发类门店。'],
  ['祛痘门店 / 美业连锁门店', '适合拥有本地客群与服务团队，希望导入白发脱发项目，丰富顾客服务周期的门店。'],
  ['新创业者', '适合看好头皮毛发护理长期需求，希望依托品牌形象、产品体系与服务模型进入赛道的人群。'],
];

const supportItemsOfficial = [
  ['品牌形象支持', '提供统一门头、空间氛围、物料标准与陈列建议，帮助门店建立清晰专业的品牌识别。'],
  ['产品体系支持', '围绕院线套盒、居家精华、洗护产品与发丝修护产品，建立清晰产品组合。'],
  ['开业筹备支持', '提供开业物料、产品陈列、服务流程和活动规划等基础筹备建议。'],
  ['空间布局建议', '结合门店面积、动线、咨询空间、护理区域和陈列需求，提供空间规划参考。'],
  ['运营物料支持', '提供品牌手册、产品资料、护理说明、活动素材和陈列物料等内容支持。'],
  ['内容传播支持', '围绕品牌定位、产品特点、门店场景与节日活动，持续输出官方内容方向。'],
  ['巡店复盘支持', '通过阶段性巡店、服务观察、陈列建议和经营复盘，持续优化门店体验。'],
  ['产品迭代支持', '围绕白发养护、防断强韧、头皮臻养和洗护修护等方向持续完善产品矩阵。'],
];
const supportIcons = [Store, PackageCheck, CalendarCheck, MapPinned, Palette, Megaphone, RefreshCw, GraduationCap];

function Hero() {
  return <section className="home-hero official-hero compact-hero layered-hero">
    <div className="hero-ambient" aria-hidden="true" />
    <div className="container official-hero-layout">
      <div className="official-hero-copy reveal-stack">
        <h1><span className="hero-title-accent">专注白发脱发</span><span className="hero-title-main">研究与服务</span></h1>
        <p className="hero-value-line">东方草本智慧 × 现代头皮科技</p>
        <p className="hero-sub official-hero-sub">俏博士以头皮状态评估为起点，围绕白发、脱发、头油头屑、发丝脆弱等常见护理需求，构建从院线护理体验到居家巩固管理的系统化养护路径。</p>
        <div className="hero-actions"><ArrowButton to="/products">查看院线产品</ArrowButton><ArrowButton to="/franchise" variant="ghost">了解合作模式</ArrowButton></div>
      </div>
      <div className="official-hero-stage official-store-hero-stage layered-store-stage" aria-label="俏博士门店形象展示">
        <span className="store-layer store-layer-back" aria-hidden="true" />
        <span className="store-layer store-layer-mid" aria-hidden="true" />
        <img className="official-hero-store-image" src={asset('hero-store-fade-bottom.webp')} alt="俏博士白发脱发中心门店形象" />
      </div>
    </div>
  </section>;
}

function TrustSection() {
  return <section className="section surface-section official-section-clean"><div className="container"><SectionTitle eyebrow="BRAND TRUST" title="以专业品牌系统，重新定义<span>白发脱发护理体验</span>" desc="俏博士围绕品牌形象、产品体系、门店空间、护理流程与顾客体验进行系统建设，让白发脱发护理从单一产品展示，升级为更完整的专业服务场景。" /><div className="premium-grid trust-grid-v2 official-trust-grid">{officialTrustCards.map(([title, text], index) => <article className="premium-card" key={title}><span className="card-kicker">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ProductFocus() {
  return <section className="section official-product-focus"><div className="container"><SectionTitle centered eyebrow="PROFESSIONAL KITS" title="三大院线套盒，承接<span>到店护理体验</span>" desc="围绕白发养护、防断强韧、头皮臻养等核心护理场景，俏博士以院线套盒建立专业体验入口，并通过居家巩固产品延伸长期护理认知。" /><ProductPosterCarousel items={kitProductPosters} label="三大院线套盒产品轮播" auto autoDirection="right" interval={3200} variant="kit" /><div className="center-actions official-center-actions"><ArrowButton to="/all-product/27taohe/">查看院线套盒</ArrowButton><ArrowButton to="/products" variant="ghost">探索全部产品</ArrowButton></div></div></section>;
}

function ProductMatrix() {
  return <section className="section poster-showcase-section official-poster-section"><div className="container"><SectionTitle eyebrow="PRODUCT MATRIX" title="产品矩阵轻量展示，横向<span>自动滚动</span>" desc="通过更轻量的产品卡片展示套盒、精华、洗护产品定位与规格，保留官网高级感，不做成拥挤的电商详情页。" /><ProductPosterCarousel items={featuredProductPosters} label="产品列表轮播" auto autoDirection="right" interval={3600} variant="compact" /></div></section>;
}

function CarePath() {
  return <section className="section care-path-section official-care-path"><div className="container care-path-layout"><div><SectionTitle eyebrow="SCALP CARE SYSTEM" title="从头皮状态评估，到<span>长期养护管理</span>" desc="俏博士强调温和、持续、可理解的护理方式，将头皮状态评估、定制护理建议、院线护理体验和居家巩固管理连接成一套完整路径。" /><ArrowButton to="/project">查看门店服务场景</ArrowButton></div><div className="care-path-grid">{careSteps.map((step) => <article className="process-card" key={step.no}><b>{step.no}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>;
}

function StoreProof() {
  return <section className="section official-store-section"><div className="container"><SectionTitle centered eyebrow="STORE IMAGE" title="让顾客一眼感受到<span>专业与信任</span>" desc="俏博士门店围绕“白发脱发中心”的清晰定位，统一门头识别、咨询空间、护理区域与产品陈列，呈现更具辨识度的品牌体验。" /><div className="store-grid-v2 official-store-grid">{storeZones.map((zone) => <article className="store-proof-card" key={zone.title}><img src={zone.image} alt={zone.title} /><div><h3>{zone.title}</h3><p>{zone.text}</p></div></article>)}</div><div className="proof-row official-proof-row">{proofCards.map((card) => <article className="proof-card" key={card.title}><ClipboardCheck size={24} strokeWidth={1.55} /><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></section>;
}

function PartnerFit() {
  return <section className="section partner-section official-partner-section"><div className="container"><SectionTitle centered eyebrow="FRANCHISE MODEL" title="选择适合你的<span>俏博士合作路径</span>" desc="无论是独立打造白发脱发中心，还是在现有门店中导入新项目，俏博士都可以根据门店基础匹配合作方式。" /><div className="partner-grid official-partner-grid">{partners.map(([title, text]) => <article className="partner-card" key={title}><span className="partner-icon"><Building2 size={25} strokeWidth={1.55} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function BrandProof() {
  return <section className="section official-brand-proof"><div className="container"><SectionTitle centered eyebrow="BRAND PROOF" title="看得见的<span>品牌实力</span>" desc="品牌荣誉、门店实景、产品资料与服务体系，共同构成俏博士可展示、可理解、可传播的品牌信任基础。" /><div className="cert-grid cert-grid-featured official-cert-grid">{certificates.map((cert) => <article key={cert.title} className="cert-card"><img src={cert.image} alt={cert.title} /><h3>{cert.title}</h3></article>)}</div><div className="center-actions official-center-actions"><ArrowButton to="/brand-strength" variant="ghost">查看完整品牌实力</ArrowButton></div></div></section>;
}

function SupportSystem() {
  return <section className="section support-system-section official-support-section"><div className="container"><SectionTitle eyebrow="SUPPORT POLICY" title="面向合作伙伴的<span>全周期品牌支持体系</span>" desc="俏博士以品牌形象、产品体系、空间规划、运营物料、内容传播与持续服务为核心，为合作伙伴提供更完整、更稳定的品牌合作支持。" /><div className="support-system-grid official-support-grid">{supportItemsOfficial.map(([title, text], index) => { const Icon = supportIcons[index % supportIcons.length]; return <article className="support-system-card" key={title}><span className="support-system-icon"><Icon size={22} strokeWidth={1.55} /></span><h3>{title}</h3><p>{text}</p></article>; })}</div></div></section>;
}

function ContactBlock() {
  return <section className="section contact-section official-contact-section" id="contact"><div className="container contact-layout"><div className="contact-copy"><SectionTitle eyebrow="CONTACT" title="获取俏博士<span>品牌资料</span>" desc="提交姓名、手机、城市和咨询需求，品牌顾问将提供品牌介绍、产品资料、门店合作模式与城市合作政策说明。" /><div className="contact-points"><span><Handshake size={17} /> 合作模式说明</span><span><PackageCheck size={17} /> 产品资料获取</span><span><ShieldCheck size={17} /> 城市政策咨询</span></div></div><div className="consult-card"><LeadForm title="联系品牌顾问" /></div></div></section>;
}

export default function HomeOfficial() {
  return <><Hero /><TrustSection /><ProductFocus /><ProductMatrix /><CarePath /><StoreProof /><PartnerFit /><BrandProof /><SupportSystem /><ContactBlock /></>;
}
