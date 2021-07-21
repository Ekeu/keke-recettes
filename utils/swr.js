// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetRecipes = (initialSWRData) => {
  return useSWR(`/api/recipes`, fetcher, { initialData: initialSWRData });
};
