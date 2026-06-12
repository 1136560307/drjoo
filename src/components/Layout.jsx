import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useSeo } from '../hooks/useSeo';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useSeo(pathname);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
