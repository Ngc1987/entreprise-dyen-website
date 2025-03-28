/**
 * Utilitaire pour obtenir le chemin correct des images selon l'environnement
 */
export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/entreprise-dyen-website' : '';
  return `${basePath}${path}`;
};

export const imageLoader = ({ src, width, quality }) => {
  return getImagePath(src);
}; 