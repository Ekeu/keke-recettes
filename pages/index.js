import { useState } from 'react';

import Layout from '@/components/layout/layout.component';
import CardRecipe from '@/components/cards/card-recipe.component';
import CardListRecipe from '@/components/cards/card-recipe-simple.component';
import FilteringMenu from '@/components/filtering-menu/filtering-menu.component';

import { getAllRecipes } from '@/lib/api';
import { useGetRecipes } from '@/utils/swr';

export default function Home({ recipes: initialSWRData }) {
  const [filter, setFilter] = useState({
    view: {
      list: false,
    },
  });

  const { data: recipes, error } = useGetRecipes(initialSWRData);

  const handleChangeView = (option, value) => {
    setFilter({ ...filter, [option]: value });
  };

  return (
    <Layout>
      <main>
        <div className='relative bg-white pt-4 pb-20 px-4 sm:px-6 lg:pt-6 lg:pb-28 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3' />
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <div className='text-center'>
              <h2 className='text-3xl tracking-tight font-extrabold font-hind text-blue-gray-800 sm:text-4xl'>
                Nos Recettes
              </h2>
              <p className='mt-3 max-w-2xl mx-auto font-hind text-xl text-blue-gray-500 sm:mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <FilteringMenu filter={filter} onChangeView={handleChangeView} />
            {filter.view.list ? (
              <div className='mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
                {recipes.map((recipe) => (
                  <CardListRecipe key={recipe._id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
                {recipes.map((recipe) => (
                  <CardRecipe key={recipe._id} recipe={recipe} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

/**
 * Function called at build time
 * Provides props to page component
 * Will create static page
 */
export async function getStaticProps() {
  const recipes = await getAllRecipes({ offset: 0 });
  return {
    props: {
      recipes,
    },
  };
}
