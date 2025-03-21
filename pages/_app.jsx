import '../styles/globals.css';
import { LoadingProvider } from '../contexts/LoadingContext';
import { useLoading } from '../contexts/LoadingContext';
import Loader from '../components/Loader';

function AppContent({ Component, pageProps }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </LoadingProvider>
  );
}

export default MyApp; 