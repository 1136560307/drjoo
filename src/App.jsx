import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HomeOfficial from './pages/HomeOfficial';
import About from './pages/About';
import BrandStrength from './pages/BrandStrength';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/ProductCategory';
import Project from './pages/Project';
import AiEmpowerment from './pages/AiEmpowerment';
import Franchise from './pages/Franchise';
import Cases from './pages/Cases';
import News from './pages/News';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeOfficial />} />
        <Route path="/home-old" element={<Home />} />
        <Route path="/about_drjoo" element={<About />} />
        <Route path="/brand-strength" element={<BrandStrength />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/all-product/27danpin/" element={<ProductCategory type="home" />} />
        <Route path="/all-product/27taohe/" element={<ProductCategory type="professional" />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ai-empowerment" element={<AiEmpowerment />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/category/brand" element={<News category="品牌" />} />
        <Route path="/news/category/product" element={<News category="产品" />} />
        <Route path="/news/category/cases" element={<News category="案例" />} />
        <Route path="/news/category/franchise" element={<News category="加盟" />} />
        <Route path="/news/:slug" element={<News />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/articles" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
