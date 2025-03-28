import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import { IMAGES } from '../utils/constants';
import { imageLoader } from '../utils/imageLoader';

export default function Chalets() {
  return (
    <Layout>
      <Head>
        <title>Chalets et Extensions - Entreprise D'Yen</title>
        <meta name="description" content="Construction de chalets en bois et extensions. Solutions écologiques et personnalisées pour votre habitat." />
      </Head>

      <Hero
        title="Chalets & Extensions en Bois"
        subtitle=""
        imagePath={IMAGES.hero.chalets}
        extraContent={
          <div className="text-gray-200 text-base space-y-3">
            <p>
              Notre entreprise vous propose ses services dans la conception et la réalisation de chalets en bois.
            </p>
            <p>
              En plus de l'exécution de ces travaux, nous vous proposons notre assistance dans les démarches 
              administratives et la coordination des différents corps de métiers pour un « esprit libre ».
            </p>
          </div>
        }
      />

      <section id="chalets" className="py-16">
        <div className="container">
          <SectionTitle
            title="Chalets en Bois"
            subtitle="La construction en bois offre de nombreux avantages"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                loader={imageLoader}
                src={IMAGES.services.chalets.main}
                alt="Chalet en bois"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">La construction en bois offre de nombreux avantages</h3>
              <ul className="space-y-3">
                {chaletBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="extensions" className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Extensions en Bois"
            subtitle="La solution idéale pour agrandir votre espace de vie"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Pour diverses raisons</h3>
              <ul className="space-y-3">
                {extensionBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Nous intervenons également pour la rénovation ou l'amélioration de votre Charpente / Couverture.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                loader={imageLoader}
                src={IMAGES.services.extensions.main}
                alt="Extension en bois"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const chaletBenefits = [
  "Le bois, matériau pur et écologique",
  "Grandes possibilités architecturales",
  "Performances énergétiques optimales",
  "Rapidité d'exécution",
];

const extensionBenefits = [
  "La légèreté de la construction bois",
  "La grande capacité d'intégration à l'existant",
  "L'atout esthétique du bois",
  "Contraintes techniques simplifiées",
]; 