import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <div className="h-20"></div>
      <main id="main-content" className="flex-grow" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </div>
  );
} 