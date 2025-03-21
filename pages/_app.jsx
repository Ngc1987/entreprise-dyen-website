import '../styles/globals.css';
import { LoadingProvider } from '../contexts/LoadingContext';
import { useLoading } from '../contexts/LoadingContext';
import Loader from '../components/Loader';
import Head from 'next/head';

function AppContent({ Component, pageProps }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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