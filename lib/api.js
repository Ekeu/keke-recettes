import imageUrlBuilder from '@sanity/image-url';

import client from './sanity';

const recipeFields = `
    _id,
    _updatedAt,
    title,
    description,
    'slug':slug.current,
    'author': author->{
        name,
        'avatar': avatar.asset->url
    },
    coverImage,
    category,
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllRecipes(
  { offset, sort } = { offset: 0, sort: 'desc' }
) {
  const data = await client.fetch(
    `*[_type == "recipe"] | order(_createdAt ${sort}) {${recipeFields}}[${offset}...${
      offset + 3
    }]`
  );
  return data;
}

export async function getRecipeBySlug(slug) {
  const data = await client
    .fetch(
      `*[_type == "recipe" && slug.current == $slug]{${recipeFields}content[]{...,"asset": asset->}}`,
      {
        slug,
      }
    )
    .then((res) => res?.[0]);
  return data;
}
