import { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES } from '../utils/constants';
import { getImagePath } from '../utils/imageLoader';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true); // Commencer avec loading à true
  const [progress, setProgress] = useState(0); // Progression du chargement
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    // Vérifier si nous sommes côté client
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    // Ajouter un timeout de sécurité pour s'assurer que le site s'affiche 
    // même si toutes les images ne se chargent pas
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 secondes maximum d'attente

    // Liste des images principales à précharger
    const heroImages = [
      getImagePath(IMAGES.hero.home),
      getImagePath(IMAGES.hero.chalets),
      getImagePath(IMAGES.hero.menuiserie),
      getImagePath(IMAGES.hero.contact)
    ];

    // Ajouter quelques images critiques des sections
    const criticalImages = [
      ...heroImages,
      getImagePath(IMAGES.services.chalets.main),
      getImagePath(IMAGES.services.extensions.main)
    ];

    // Nombre total d'images à charger
    const totalImages = criticalImages.length;
    let loadedImages = 0;

    // Fonction pour mettre à jour la progression
    const updateProgress = (src) => {
      loadedImages++;
      // Mettre à jour l'état des images individuelles
      setImagesLoaded(prev => ({
        ...prev,
        [src]: true
      }));
      
      const newProgress = Math.round((loadedImages / totalImages) * 100);
      setProgress(newProgress);
      
      // Si toutes les images sont chargées, désactiver le loader
      if (loadedImages === totalImages) {
        clearTimeout(safetyTimeout);
        // Petit délai pour une transition plus fluide
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    // Préchargement des images
    criticalImages.forEach(src => {
      const img = new window.Image();
      img.onload = () => {
        updateProgress(src);
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        updateProgress(src); // Considérer comme chargée même en cas d'erreur
      };
      img.src = src;
    });

    // Nettoyer le timeout si le composant est démonté
    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, progress, imagesLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 