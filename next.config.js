/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true, // Nécessaire pour l'export statique
  },
  // Configuration pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/entreprise-dyen-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/entreprise-dyen-website/' : '',
  // Ajout de la configuration pour les ressources statiques
  trailingSlash: true,
  // Désactiver le chargement dynamique pour un déploiement statique complet
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig 