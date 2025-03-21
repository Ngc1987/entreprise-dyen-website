import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Données structurées schema.org pour une entreprise locale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Entreprise D'Yen",
              "image": "https://ngc1987.github.io/entreprise-dyen-website/images/logo.png",
              "description": "Spécialiste en construction de chalets, extensions en bois et menuiserie. Implantée à Colmars depuis 1936.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Route Cascade de la Lance",
                "addressLocality": "Colmars",
                "postalCode": "04370",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.1800761,
                "longitude": 6.6263325
              },
              "telephone": "04 92 83 44 25",
              "email": "entreprisedyen@hotmail.fr",
              "url": "https://ngc1987.github.io/entreprise-dyen-website/",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "12:00"
                }
              ],
              "sameAs": [
                "https://ngc1987.github.io/entreprise-dyen-website/",
                "https://www.google.com/maps/place/Dyen+Construction+Bois-+Entreprise+de+menuiserie+construction+bois+-chalet+bois+-maison+ossature+bois/@44.1800761,6.6263325,15z/"
              ],
              "priceRange": "€€"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 