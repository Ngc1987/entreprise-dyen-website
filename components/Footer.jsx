import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Entreprise D'Yen</h3>
            <p className="text-gray-300">
              Spécialiste en construction de chalets, extensions en bois et menuiserie.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/chalets" className="hover:text-primary transition-colors">Chalets</Link></li>
              <li><Link href="/menuiserie" className="hover:text-primary transition-colors">Menuiserie</Link></li>
              <li><Link href="/galerie" className="hover:text-primary transition-colors">Galerie</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Route Cascade de la Lance</li>
              <li>04370 COLMARS</li>
              <li>Tél: 04 92 83 44 25</li>
              <li>Email: entreprisedyen@hotmail.fr</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p className="mb-2">ENTREPRISE DYEN SARL - SIRET 40473968200015 - TVA Intra. FR24404739682 - RCS Manosque B 404 739 682</p>
          <p className="mb-2">DYEN CONSTRUCTION BOIS © {new Date().getFullYear()} | Creation site : LSM Référencement</p>
        </div>
      </div>
    </footer>
  );
} 