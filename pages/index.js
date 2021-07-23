import { useState, Fragment } from 'react';

import Layout from '@/components/layout/layout.component';
import Button from '@/components/button/button.component';
import Banner from '@/components/banner/banner.component';
import FilteringMenu from '@/components/filtering-menu/filtering-menu.component';

import { getAllRecipes } from '@/lib/api';
import { useGetRecipesPages } from '@/utils/pagination';

export default function Home({ recipes, preview }) {
  const [filter, setFilter] = useState({
    view: {
      list: false,
    },
    sort: {
      asc: false,
    },
  });

  /**
   * loadMore => function which executes the withSR cb fnc
   * isLoadingMore => true when making request to fetch data
   * isReachingEnd => true when all data has been loaded
   */
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetRecipesPages({
    recipes,
    filter,
  });

  const handleChangeView = (option, value) => {
    setFilter({ ...filter, [option]: value });
  };

  return (
    <Fragment>
      {preview && (
        <Banner
          bannerColor='bg-blue-gray-600'
          iconBgColor='bg-blue-gray-800'
          textColor='text-white'
          mobileText='Mode preview!'
          webText='Vous êtes actuellement en mode preview!'
          linkPath='/api/exit-preview'
          linkText='Quitter le mode preview'
          linkClassName='text-blue-gray-600 bg-white hover:bg-blue-gray-50'
        />
      )}
      <Layout>
        <main>
          <div className='relative bg-white dark:bg-blue-gray-800 pt-4 pb-20 px-4 sm:px-6 lg:pt-6 lg:pb-28 lg:px-8'>
            <div className='absolute inset-0'>
              <div className='bg-white dark:bg-blue-gray-800 h-1/3 sm:h-2/3' />
            </div>
            <div className='relative max-w-7xl mx-auto'>
              <div className='text-center'>
                <h2 className='text-3xl tracking-tight font-extrabold font-hind text-blue-gray-800 dark:text-white sm:text-4xl'>
                  Nos Recettes
                </h2>
                <p className='mt-3 max-w-2xl mx-auto font-hind text-xl text-blue-gray-500 sm:mt-4 dark:text-blue-gray-300'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  libero labore natus atque, ducimus sed.
                </p>
              </div>
              <FilteringMenu filter={filter} onChangeView={handleChangeView} />
              {pages}
              <div className='text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <Button
                  onClick={loadMore}
                  disabled={isReachingEnd}
                  loading={isLoadingMore}
                >
                  Plus de recettes
                </Button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

/**
 * Function called at build time
 * Provides props to page component
 * Will create static page
 */
export async function getStaticProps({ preview = false }) {
  const recipes = await getAllRecipes({ offset: 0, sort: 'desc' });
  return {
    props: {
      recipes,
      preview,
    },
  };
}
