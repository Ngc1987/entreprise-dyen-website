import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState('right'); // 'left' ou 'right'
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    // Empêcher le défilement de la page quand la modale est ouverte
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    // Rétablir le défilement
    document.body.style.overflow = 'auto';
  };

  const showNextImage = () => {
    setSlideDirection('right');
    setSelectedImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setSlideDirection('left');
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Gérer le focus quand la modale s'ouvre
  useEffect(() => {
    if (selectedImageIndex !== null && closeButtonRef.current) {
      setTimeout(() => {
        closeButtonRef.current.focus();
      }, 100);
    }
  }, [selectedImageIndex]);

  // Piéger le focus dans la modale
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleTabKey = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [selectedImageIndex]);

  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return;
    
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div onKeyDown={handleKeyDown} className="gallery-container">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label="Galerie d'images"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
            onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
            tabIndex="0"
            role="listitem"
            aria-label={`Image ${index + 1} sur ${images.length}: ${image.title}`}
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions pour l'accessibilité */}
      <p className="sr-only">
        Appuyez sur Entrée pour ouvrir l'image en plein écran. Dans la vue plein écran, utilisez les flèches gauche et droite pour naviguer entre les images, et Échap pour fermer.
      </p>

      {/* Modal avec navigation */}
      {selectedImageIndex !== null && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
              aria-label="Fermer la galerie"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
              aria-label="Image précédente"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
              aria-label="Image suivante"
            >
              <ChevronRight size={40} />
            </button>
            
            <div 
              className="relative w-full h-full flex items-center justify-center"
              aria-live="polite"
            >
              <div 
                key={selectedImageIndex}
                className={`absolute inset-0 transition-transform duration-300 ease-in-out transform ${
                  slideDirection === 'right' ? 'slide-right' : 'slide-left'
                }`}
              >
                <Image
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div 
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
                id="modal-title"
              >
                <h3 className="text-xl font-semibold">{images[selectedImageIndex].title}</h3>
                <p className="text-gray-300">{images[selectedImageIndex].description}</p>
                <p className="mt-2 text-sm text-gray-400">
                  Image {selectedImageIndex + 1} sur {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 