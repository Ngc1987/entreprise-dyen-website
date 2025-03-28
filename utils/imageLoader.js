/**
 * Utilitaire pour obtenir le chemin correct des images selon l'environnement
 */
export const getImagePath = (path) => {
  // Vérifier si nous sommes dans un environnement de navigateur
  const isClient = typeof window !== 'undefined';
  
  // Déterminer si nous sommes en production selon l'URL ou selon NODE_ENV
  const isProd = isClient 
    ? window.location.hostname.includes('github.io') 
    : process.env.NODE_ENV === 'production';
  
  // Définir le chemin de base
  const basePath = isProd ? '/entreprise-dyen-website' : '';
  
  // Si le chemin commence déjà par le basePath, ne pas l'ajouter à nouveau
  if (path.startsWith(basePath)) {
    return path;
  }
  
  return `${basePath}${path}`;
};

export const imageLoader = ({ src }) => {
  return getImagePath(src);
}; 