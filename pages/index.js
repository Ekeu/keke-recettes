import { useState, Fragment } from 'react';

import Layout from '@/components/layout/layout.component';
import Button from '@/components/button/button.component';
import Banner from '@/components/banner/banner.component';
import RecipesDisplay from '@/components/recipes-display/recipes-display.component';
import FilteringMenu from '@/components/filtering-menu/filtering-menu.component';
import CardRecipeSkeleton from '@/components/cards/card-recipe-skeleton.component';
import CardListRecipeSkeleton from '@/components/cards/card-recipe-simple-skeleton.component';
import GridContainer from '@/components/grid-container/grid-container.component';

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

  const { data, size, setSize, hitEnd, isValidating } = useGetRecipesPages({
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
              <RecipesDisplay data={data || [recipes]} filter={filter} />
              {isValidating ? (
                filter.view.list ? (
                  <GridContainer className='gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
                    {[...Array(3)].map((_, i) => (
                      <CardListRecipeSkeleton key={i + 'List'} />
                    ))}
                  </GridContainer>
                ) : (
                  <GridContainer className='max-w-lg mx-auto gap-5 lg:grid-cols-3 lg:max-w-none'>
                    {[...Array(3)].map((_, i) => (
                      <CardRecipeSkeleton key={i + 'Card'} />
                    ))}
                  </GridContainer>
                )
              ) : null}
              <div className='text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <Button
                  onClick={() => setSize(size + 1)}
                  disabled={hitEnd}
                  loading={isValidating}
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
