import { useState, useEffect } from 'react';
import Head from 'next/head';
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

  // Détermine si nous sommes sur GitHub Pages
  const isGithubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // Récupère le chemin de base
  const basePath = isGithubPages ? '/entreprise-dyen-website' : '';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Script qui fixe les chemins des ressources */}
      {isGithubPages && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // Fonction pour fixer les liens dans le document
                  function fixLinks() {
                    // Préfixe pour GitHub Pages
                    const prefix = '/entreprise-dyen-website';
                    
                    // Parcourir tous les liens
                    document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]').forEach(function(el) {
                      // Attribut à vérifier (src ou href)
                      const attr = el.hasAttribute('src') ? 'src' : 'href';
                      const value = el.getAttribute(attr);
                      
                      // Ne pas modifier les URLs absolues ou celles qui ont déjà le préfixe
                      if (value && !value.startsWith('http') && !value.startsWith(prefix) && !value.startsWith('data:')) {
                        el.setAttribute(attr, prefix + value);
                      }
                    });
                  }
                  
                  // Exécuter immédiatement
                  fixLinks();
                  
                  // Observer les changements du DOM pour fixer de nouveaux éléments
                  const observer = new MutationObserver(fixLinks);
                  observer.observe(document.documentElement, { 
                    childList: true, 
                    subtree: true 
                  });
                })();
              `
            }}
          />
        </Head>
      )}
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