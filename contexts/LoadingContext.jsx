import { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES } from '../utils/constants';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const heroImages = [
      IMAGES.hero.home,
      IMAGES.hero.chalets,
      IMAGES.hero.menuiserie,
      IMAGES.hero.contact
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
      .then(() => setIsLoading(false))
      .catch(error => {
        console.error('Error preloading images:', error);
        setIsLoading(false); // On affiche quand même le site en cas d'erreur
      });
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 