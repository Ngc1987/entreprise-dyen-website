import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '../utils/constants';
import { imageLoader } from '../utils/imageLoader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // Gestion des redirections de GitHub Pages
  useEffect(() => {
    // Vérifier si nous avons un paramètre 'path' dans l'URL
    const { path } = router.query;
    if (path && typeof window !== 'undefined') {
      // Rediriger vers la bonne page
      router.push(path);
    }
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>Entreprise D'Yen - Construction de Chalets et Menuiserie</title>
        <meta name="description" content="Spécialiste en construction de chalets, extensions en bois et menuiserie. Découvrez nos services de qualité pour votre habitat." />
      </Head>

      <Hero
        title="Donnez vie à vos projets de construction en bois"
        subtitle="Implantée à Colmars depuis 1936, l'entreprise DYEN met son expertise en chalets, extensions et menuiserie à votre service"
        buttonText="Découvrir nos services"
        buttonLink="/chalets"
        imagePath={IMAGES.hero.home}
        extraContent={
          <div className="text-gray-200 text-base space-y-3">
            <p className="mt-3">
              Ayant à cœur la qualité et le respect des matériaux, nous mettrons tout en œuvre 
              pour vous proposer des solutions adaptées à vos projets.
            </p>
            <p className="mt-3">
              N'hésitez pas à nous contacter, nous aurons le plaisir de vous accueillir pour vous faire découvrir 
              le bois et ses multiples possibilités : 04 92 83 44 25 - entreprisedyen@hotmail.fr
            </p>
          </div>
        }
      />

      <section className="py-16" aria-labelledby="services-title">
        <div className="container">
          <SectionTitle
            title="Nos Services"
            subtitle="Découvrez notre expertise dans la construction et l'aménagement"
            id="services-title"
          />

          <div className="text-center max-w-3xl mx-auto mb-12" tabIndex="0">
            <p className="mb-4">
              Implantée au cœur du Haut-Verdon Val d'Allos, dans les Alpes de Haute Provence, 
              DYEN CONSTRUCTION BOIS met son savoir-faire à votre service pour tous vos projets :
            </p>
            <ul className="text-center max-w-md mx-auto space-y-2 mb-4" aria-label="Liste de nos services">
              <li className="flex items-center justify-center">
                <span className="text-primary mr-2" aria-hidden="true">•</span>
                <span>Construction / Rénovation de chalets bois</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-primary mr-2" aria-hidden="true">•</span>
                <span>Extension bois</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-primary mr-2" aria-hidden="true">•</span>
                <span>Charpente / Couverture</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-primary mr-2" aria-hidden="true">•</span>
                <span>Menuiserie / Agencement</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Nos services principaux">
            {services.map((service) => (
              <div key={service.title} className="group" role="listitem">
                <Link href={service.link} aria-label={`En savoir plus sur ${service.title}: ${service.description}`}>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      loader={imageLoader}
                      src={service.url}
                      alt={`Illustration de notre service: ${service.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const services = [
  {
    title: "Chalets en Bois",
    description: "Construction de chalets traditionnels et modernes, adaptés à vos besoins.",
    url: IMAGES.services.chalets.main,
    link: "/chalets"
  },
  {
    title: "Extensions",
    description: "Agrandissez votre espace de vie avec nos extensions en bois sur mesure.",
    url: IMAGES.services.extensions.main,
    link: "/chalets#extensions"
  },
  {
    title: "Menuiserie",
    description: "Travaux de menuiserie intérieure et extérieure pour embellir votre habitat.",
    url: IMAGES.services.menuiserie[0].url,
    link: "/menuiserie"
  }
]; 