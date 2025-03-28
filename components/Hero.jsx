import NextImage from 'next/image';
import Link from 'next/link';
import { imageLoader, getImagePath } from '../utils/imageLoader';
import { useEffect, useState } from 'react';

export default function Hero({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  imagePath,
  extraContent
}) {
  // État local pour gérer le chargement de l'image
  const [imageLoaded, setImageLoaded] = useState(false);

  // Effet pour précharger l'image de fond
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new window.Image();
      img.src = getImagePath(imagePath);
      img.onload = () => setImageLoaded(true);
    }
  }, [imagePath]);

  return (
    <div className="relative h-screen" role="region" aria-label="En-tête de la page">
      <div className="absolute inset-0">
        <NextImage
          loader={imageLoader}
          src={imagePath}
          alt={`Image d'arrière-plan: ${title} - Entreprise D'Yen, spécialiste en construction bois`}
          fill
          className={`object-cover brightness-50 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          sizes="100vw"
          role="img"
          aria-hidden="false"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white fade-in z-10 mt-[-80px]" tabIndex="0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100">
            {subtitle}
          </p>
          
          {extraContent && (
            <div className="mt-6 mb-8 text-white">
              {extraContent}
            </div>
          )}
          
          {buttonText && buttonLink && (
            <Link 
              href={buttonLink}
              className="btn btn-primary inline-block"
              aria-label={`${buttonText} pour en savoir plus sur ${title}`}
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 