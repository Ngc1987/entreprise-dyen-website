/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/entreprise-dyen-website' : '';

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
  basePath: basePath,
  assetPrefix: isProd ? '/entreprise-dyen-website/' : '',
  // Ajout de la configuration pour les ressources statiques
  trailingSlash: true,
  // Désactiver le chargement dynamique pour un déploiement statique complet
  experimental: {
    forceSwcTransforms: true,
  },
  // Personnaliser les URLs des images
  env: {
    ASSET_PREFIX: basePath,
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  // Désactiver le bundling des sourcemaps pour réduire la taille
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig 