import { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false); // Directement à false pour éviter tout délai

  useEffect(() => {
    // Désactivation du préchargement des images
    // pour éviter les problèmes avec GitHub Pages
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 