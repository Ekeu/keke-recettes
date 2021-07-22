import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '@/components/layout/layout.component';
import Loader from '@/components/loader/loader.component';
import PatternRect from '@/components/patterns/pattern-rect.component';
import ContentHeader from '@/components/content/content-header.component';
import ContentRecipeImage from '@/components/content/content-recipe-image.component';
import ContentAuthor from '@/components/content/content-author.component';

import { getAllRecipes, getRecipeBySlug, urlFor } from '@/lib/api';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: ({ node: { asset, alt } }) => (
      <figure>
        <img
          className='w-full rounded-lg'
          src={urlFor(asset.url).height(873).width(1310).fit('max').url()}
          alt={alt}
          width={1310}
          height={873}
        />
      </figure>
    ),
  },
};

export default function RecipePage({ recipe }) {
  const router = useRouter;

  if (router.isFallback) {
    return (
      <Loader
        containerClassName='my-60'
        className='py-8 px-4 sm:px-10'
        size={'h-12 w-12'}
        color={'text-rose-500'}
      />
    );
  }

  return (
    <Layout>
      <div className='relative py-16 bg-white overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div
            className='relative h-full text-lg max-w-prose mx-auto'
            aria-hidden='true'
          >
            <PatternRect
              className='absolute top-12 left-full transform translate-x-32'
              id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
            />
            <PatternRect
              className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
              id='f210dbf6-a58d-4871-961e-36d5016a0f49'
            />
            <PatternRect
              className='absolute bottom-12 left-full transform translate-x-32'
              id='d3eb07ae-5182-43e6-857d-35c643af9034'
            />
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='text-lg max-w-4xl mx-auto'>
            <ContentHeader category={recipe.category} title={recipe.title} />
            <ContentAuthor
              author={recipe.author}
              updatedAt={recipe._updatedAt}
            />
            <ContentRecipeImage
              coverImage={urlFor(recipe.coverImage).url()}
              title={recipe.title}
            />
          </div>
          <div className='mt-6 prose prose-indigo prose-lg text-blue-gray-500 mx-auto font-hind'>
            <BlockContent blocks={recipe.content} serializers={serializers} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const recipe = await getRecipeBySlug(params.slug);
  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes();
  const paths = recipes?.map((recipe) => ({
    params: {
      slug: recipe.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
