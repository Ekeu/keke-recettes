import Layout from '@/components/layout/layout.component';
import PatternRect from '@/components/patterns/pattern-rect.component';
import ContentHeader from '@/components/content/content-header.component';
import ContentRecipeImage from '@/components/content/content-recipe-image.component';
import ContentAuthor from '@/components/content/content-author.component';

import { getAllRecipes, getRecipeBySlug } from '@/lib/api';

export default function RecipePage({ recipe }) {
  return (
    <Layout>
      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-blue-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
          <ContentHeader category={recipe.category} title={recipe.title} />
          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <PatternRect
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                id='de316486-4a29-4312-bdfc-fbce2132a2c1'
              />
              <ContentRecipeImage
                coverImage={recipe.coverImage}
                title={recipe.title}
              />
              <div className='mt-14 relative text-base max-w-prose mx-auto lg:mt-16 lg:max-w-none'>
                <ContentAuthor
                  author={recipe.author}
                  updatedAt={recipe._updatedAt}
                />
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                {/* CONTENT */}
              </div>
            </div>
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
    fallback: false,
  };
}
