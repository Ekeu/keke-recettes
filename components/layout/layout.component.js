import Head from 'next/head';
import Hero from '../hero/hero.component';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

export default function Layout({ title, keywords, description, children }) {
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
      </Head>
      <Navbar />
      <Hero />
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
