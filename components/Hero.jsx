import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  imagePath,
  extraContent
}) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white fade-in z-10 mt-[-80px]">
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
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 