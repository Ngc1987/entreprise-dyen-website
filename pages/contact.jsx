import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { IMAGES } from '../utils/constants';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Entreprise D'Yen</title>
        <meta name="description" content="Contactez Entreprise D'Yen pour vos projets de construction de chalets, extensions et menuiserie." />
      </Head>

      <Hero
        title="Contactez-nous"
        subtitle="Pour donner vie à vos projets"
        imagePath={IMAGES.hero.contact}
        extraContent={
          <div className="text-gray-200 text-base space-y-3">
            <p>
              N'hésitez pas à nous contacter, nous aurons le plaisir de vous accueillir pour vous faire 
              découvrir le bois et ses multiples possibilités.
            </p>
            <p>
              Nous intervenons généralement sur les communes du Haut Verdon Val d'Allos. Si vous avez un projet 
              au-delà de ce secteur, n'hésitez pas à nous contacter, nous étudierons votre demande.
            </p>
          </div>
        }
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Nos Coordonnées"
                subtitle="N'hésitez pas à nous contacter pour toute information"
              />

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p>DYEN CONSTRUCTION BOIS<br />Route Cascade de la Lance<br />04370 COLMARS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p>04 92 83 44 25</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>entreprisedyen@hotmail.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Horaires d'ouverture</h3>
                    <p>Lundi - Vendredi : 8h00 - 17h00<br />
                    Samedi : Sur rendez-vous<br />
                    Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.1478811809245!2d6.626332476758737!3d44.18007611456996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc625a6a864443%3A0xcc53a8ab32b94888!2sDyen%20Construction%20Bois-%20Entreprise%20de%20menuiserie%20construction%20bois%20-chalet%20bois%20-maison%20ossature%20bois!5e0!3m2!1sfr!2sfr!4v1711027175599!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <SectionTitle
                title="Formulaire de Contact"
                subtitle="Envoyez-nous un message"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 