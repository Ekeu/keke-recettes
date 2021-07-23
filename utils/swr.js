// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetRecipes = ({ offset, filter }, initialSWRData) => {
  return useSWR(
    `/api/recipes?offset=${offset || 0}&sort=${
      filter.sort.asc ? 'asc' : 'desc'
    }`,
    fetcher,
    {
      initialData: initialSWRData,
    }
  );
};

export const getRecipes = url => fetcher(url)