import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Gallery from '../components/Gallery';
import { IMAGES } from '../utils/constants';

export default function Galerie() {
  return (
    <Layout>
      <Head>
        <title>Galerie - Entreprise D'Yen</title>
        <meta name="description" content="Découvrez nos réalisations en construction de chalets, extensions et menuiserie à travers notre galerie photos." />
      </Head>

      <Hero
        title="Nos Réalisations"
        subtitle="Découvrez l'excellence de notre savoir-faire"
        imagePath={IMAGES.hero.home}
      />

      <section className="py-16">
        <div className="container">
          <SectionTitle
            title="Galerie Photos"
            subtitle="Une sélection de nos plus belles réalisations"
          />

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8">Chalets</h3>
              <Gallery images={IMAGES.gallery.chalets} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8">Extensions</h3>
              <Gallery images={IMAGES.gallery.extensions} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8">Menuiserie</h3>
              <Gallery images={IMAGES.gallery.menuiserie} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 