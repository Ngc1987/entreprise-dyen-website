import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import { IMAGES } from '../utils/constants';

export default function Menuiserie() {
  return (
    <Layout>
      <Head>
        <title>Menuiserie & Aménagements - Entreprise D'Yen</title>
        <meta name="description" content="Services de menuiserie intérieure et extérieure. Aménagements sur mesure pour votre maison." />
      </Head>

      <Hero
        title="Menuiserie & Aménagements Intérieurs"
        subtitle="Allier modernité et tradition est notre souhait afin de réaliser vos projets « Sur-mesure »"
        imagePath={IMAGES.hero.menuiserie}
        extraContent={
          <div className="text-gray-200 text-base space-y-3">
            <p>
              Fort de plusieurs décennies d'expérience, DYEN CONSTRUCTION BOIS intervient dans le domaine de la menuiserie extérieure (Bois, Alu, PVC). 
              Nous avons comme priorité le choix de produits de qualité et leur mise en œuvre soignée afin 
              d'atteindre des performances énergétiques en accord avec les normes en vigueur.
            </p>
            <p>
              Nous réalisons également des agencements en bois afin de parfaire vos intérieurs. En effet nous 
              mettons l'accent sur l'utilisation de matériaux nobles tels que le mélèze, le vieux bois, 
              le bois Thermo-chauffé, etc.
            </p>
          </div>
        }
      />

      <section className="py-16">
        <div className="container">
          <SectionTitle
            title="Nos Services de Menuiserie"
            subtitle="Des solutions sur mesure pour sublimer votre habitat"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.services.menuiserie.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.url}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 