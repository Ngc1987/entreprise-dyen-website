import { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES } from '../utils/constants';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ajouter un timeout pour s'assurer que le site s'affiche après un certain temps
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 secondes maximum

    const basePath = process.env.NODE_ENV === 'production' ? '/entreprise-dyen-website' : '';
    
    const heroImages = [
      `${basePath}${IMAGES.hero.home}`,
      `${basePath}${IMAGES.hero.chalets}`,
      `${basePath}${IMAGES.hero.menuiserie}`,
      `${basePath}${IMAGES.hero.contact}`
    ];

    Promise.all(
      heroImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => {
        clearTimeout(timeout);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error preloading images:', error);
        setIsLoading(false); // On affiche quand même le site en cas d'erreur
      });

    // Nettoyer le timeout si le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 