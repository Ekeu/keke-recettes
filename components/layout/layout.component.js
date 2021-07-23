import Head from 'next/head';
import { useRouter } from 'next/router';
import Hero from '../hero/hero.component';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bangers&family=Hind:wght@300;400;500;600;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Navbar />
      {router.pathname === '/' && <Hero />}
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Keke Cook | Et si on faisait...?',
  description:
    'Découvrez toutes les recettes Keke Cook, expliquées de façon détaillée pour vous aider à grandir votre passion dans le domaine de la pâtisserie.',
  keywords:
    'parisserie, recettes, recipes, recettefacile, pastry, recette, recettesfacile, kekecook',
};
