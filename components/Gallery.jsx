import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState('right'); // 'left' ou 'right'

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
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

  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return;
    
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
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

      {/* Modal avec navigation */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors z-50 p-2"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors z-50 p-2"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="relative w-full max-w-4xl h-[80vh]">
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
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{images[selectedImageIndex].title}</h3>
              <p className="text-gray-300">{images[selectedImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 