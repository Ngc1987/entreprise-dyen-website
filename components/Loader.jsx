import { useEffect, useState } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import { getImagePath } from '../utils/imageLoader';

export default function Loader() {
  const { progress } = useLoading();
  const [dots, setDots] = useState('');
  const logoPath = getImagePath('/images/logo.png');

  useEffect(() => {
    // Animation des points de suspension
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <div className="w-64 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logoPath}
            alt="Entreprise D'Yen Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Spinner d'attente */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6 mx-auto"></div>
        
        {/* Texte de chargement */}
        <p className="text-lg text-primary font-semibold mb-4">
          Chargement{dots}
        </p>
        
        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Pourcentage */}
        <p className="text-sm text-gray-600">{progress}%</p>
      </div>
    </div>
  );
} 