import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import { IMAGES } from '../utils/constants';

// Fonction de préchargement
const preloadImage = (src) => {
  if (typeof window !== 'undefined') {
    const img = new window.Image();
    img.src = src;
  }
};

// Mapping des routes vers les images hero
const routeImages = {
  '/': IMAGES.hero.home,
  '/chalets': IMAGES.hero.chalets,
  '/menuiserie': IMAGES.hero.menuiserie,
  '/contact': IMAGES.hero.contact,
};

// Composant Link personnalisé
const NavLink = ({ href, children, isMobile, ref }) => {
  return (
    <Link 
      href={href} 
      ref={ref}
      className={`block py-2 hover:text-primary transition-colors ${isMobile ? 'px-2' : ''}`}
      onMouseEnter={() => {
        if (routeImages[href]) {
          preloadImage(routeImages[href]);
        }
      }}
      aria-current={typeof window !== 'undefined' && window.location.pathname === href ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion de l'appui sur Escape pour fermer le menu mobile
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Déplacer le focus au premier élément du menu lorsqu'il s'ouvre
  useEffect(() => {
    if (isMenuOpen && firstMenuItemRef.current) {
      setTimeout(() => {
        firstMenuItemRef.current.focus();
      }, 100);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="block"
            aria-label="Entreprise D'Yen - Retour à l'accueil"
          >
            <img
              src="/images/logo.png"
              alt="Entreprise D'Yen Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-haspopup="true"
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
            <nav 
              id="mobile-menu"
              className="absolute left-0 right-0 top-20 bg-white shadow-lg p-4 w-full z-50 md:hidden"
              aria-label="Navigation mobile"
            >
              <div className="space-y-4">
                <NavLink href="/" ref={firstMenuItemRef} isMobile>
                  Accueil
                </NavLink>
                <NavLink href="/chalets" isMobile>
                  Chalets
                </NavLink>
                <NavLink href="/menuiserie" isMobile>
                  Menuiserie
                </NavLink>
                <NavLink href="/galerie" isMobile>
                  Galerie
                </NavLink>
                <NavLink href="/contact" isMobile>
                  Contact
                </NavLink>
              </div>
            </nav>
          </CSSTransition>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex md:items-center md:space-x-8" 
            aria-label="Navigation principale"
          >
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