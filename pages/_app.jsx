import '../styles/globals.css';
import { LoadingProvider } from '../contexts/LoadingContext';
import { useLoading } from '../contexts/LoadingContext';
import Loader from '../components/Loader';
import Head from 'next/head';
import { useState, useEffect } from 'react';

function AppContent({ Component, pageProps }) {
  const { isLoading } = useLoading();
  const [mounted, setMounted] = useState(false);

  // Effet pour gérer le montage du composant
  useEffect(() => {
    setMounted(true);
    // Empêcher le défilement pendant le chargement
    if (isLoading && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isLoading]);

  // Transition en fondu pour le contenu principal
  return (
    <>
      {isLoading && <Loader />}
      <div 
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isLoading}
      >
        {mounted && <Component {...pageProps} />}
      </div>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/entreprise-dyen-website' : '';
  
  return (
    <>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <LoadingProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </LoadingProvider>
    </>
  );
}

export default MyApp; 