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
const query = `*[_type == "recipe"]{${recipeFields}}`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllRecipes() {
  const data = await client.fetch(query);
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
