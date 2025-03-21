import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import { IMAGES } from '../utils/constants';

// Fonction de préchargement
const preloadImage = (src) => {
  const img = new window.Image();
  img.src = src;
};

// Mapping des routes vers les images hero
const routeImages = {
  '/': IMAGES.hero.home,
  '/chalets': IMAGES.hero.chalets,
  '/menuiserie': IMAGES.hero.menuiserie,
  '/contact': IMAGES.hero.contact,
};

// Composant Link personnalisé
function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="block py-2 hover:text-primary transition-colors"
      onMouseEnter={() => {
        if (routeImages[href]) {
          preloadImage(routeImages[href]);
        }
      }}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-xl' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="block">
            <img
              src="/images/logo.png"
              alt="Entreprise D'Yen Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>

          {/* Mobile Navigation */}
          <CSSTransition
            in={isMenuOpen}
            timeout={300}
            classNames="menu"
            unmountOnExit
          >
            <nav className="absolute left-0 right-0 top-20 bg-white shadow-lg p-4 w-full z-50 md:hidden">
              <div className="space-y-4">
                <NavLink href="/">
                  Accueil
                </NavLink>
                <NavLink href="/chalets">
                  Chalets
                </NavLink>
                <NavLink href="/menuiserie">
                  Menuiserie
                </NavLink>
                <NavLink href="/galerie">
                  Galerie
                </NavLink>
                <NavLink href="/contact">
                  Contact
                </NavLink>
              </div>
            </nav>
          </CSSTransition>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/">
              Accueil
            </NavLink>
            <NavLink href="/chalets">
              Chalets
            </NavLink>
            <NavLink href="/menuiserie">
              Menuiserie
            </NavLink>
            <NavLink href="/galerie">
              Galerie
            </NavLink>
            <NavLink href="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
} 