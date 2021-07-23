import { useSWRInfinite } from 'swr';

import { getRecipes } from '@/utils/swr';

export const useGetRecipesPages = ({ filter }) => {
  const results = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/recipes?sort=${filter.sort.asc ? 'asc' : 'desc'}`;
      }

      if (!previousPageData.length) {
        return null;
      }

      return `/api/recipes?offset=${index * 3}&sort=${
        filter.sort.asc ? 'asc' : 'desc'
      }`;
    },
    getRecipes,
    { persistSize: true }
  );

  let hitEnd = false;

  const { data } = results;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...results, hitEnd };
};
