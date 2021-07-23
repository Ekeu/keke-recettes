import { useEffect } from 'react';
import { useSWRPages } from 'swr';

import GridContainer from '@/components/grid-container/grid-container.component';
import CardRecipe from '@/components/cards/card-recipe.component';
import CardRecipeSkeleton from '@/components/cards/card-recipe-skeleton.component';
import CardListRecipe from '@/components/cards/card-recipe-simple.component';
import CardListRecipeSkeleton from '@/components/cards/card-recipe-simple-skeleton.component';
import { useGetRecipes } from '@/utils/swr';

export const useGetRecipesPages = ({ recipes, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      let initialSWRData = !offset && recipes;
      if (typeof window !== 'undefined' && window.__pagination__init) {
        initialSWRData = null;
      }
      const { data: paginatedRecipes } = withSWR(
        useGetRecipes({ offset, filter }, initialSWRData)
      );

      if (!paginatedRecipes)
        return filter.view.list ? (
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
        );

      return filter.view.list ? (
        <GridContainer className='gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {paginatedRecipes.map((recipe) => (
            <CardListRecipe key={recipe._id} recipe={recipe} />
          ))}
        </GridContainer>
      ) : (
        <GridContainer className='max-w-lg mx-auto gap-5 lg:grid-cols-3 lg:max-w-none'>
          {paginatedRecipes.map((recipe) => (
            <CardRecipe key={recipe._id} recipe={recipe} />
          ))}
        </GridContainer>
      );
    },
    (SWR, index) => {
      /**
       * Compute offet that get's returned in the previous callback fnc
       *
       * SWR: Data received from withSWR fnc
       * index: value of current page
       */
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 3;
    },
    [filter]
  );
};
