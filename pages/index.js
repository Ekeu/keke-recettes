import { useState, Fragment } from 'react';

import Layout from '@/components/layout/layout.component';
import Button from '@/components/button/button.component';
import Banner from '@/components/banner/banner.component';
import FilteringMenu from '@/components/filtering-menu/filtering-menu.component';

import { getAllRecipes } from '@/lib/api';
import { useGetRecipesPages } from '@/utils/pagination';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Home({ recipes, preview }) {
  const [filter, setFilter] = useState({
    view: {
      list: false,
    },
    sort: {
      asc: false,
    },
  });

  /**
   * loadMore => function which executes the withSR cb fnc
   * isLoadingMore => true when making request to fetch data
   * isReachingEnd => true when all data has been loaded
   */
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetRecipesPages({
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
              {pages}
              <div className='text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <Button
                  onClick={loadMore}
                  disabled={isReachingEnd}
                  loading={isLoadingMore}
                >
                  Plus de recettes
                </Button>
              </div>
              <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
                {posts.map((post) => (
                  <div
                    key={post.title}
                    className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                  >
                    <div className='flex-shrink-0'>
                      <img
                        className='h-48 w-full object-cover'
                        src={post.imageUrl}
                        alt=''
                      />
                    </div>
                    <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                      <div className='flex-1'>
                        <p className='text-sm font-medium text-indigo-600'>
                          <a
                            href={post.category.href}
                            className='hover:underline'
                          >
                            {post.category.name}
                          </a>
                        </p>
                        <a href={post.href} className='block mt-2'>
                          <p className='text-xl font-semibold text-gray-900'>
                            {post.title}
                          </p>
                          <p className='mt-3 text-base text-gray-500'>
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className='mt-6 flex items-center'>
                        <div className='flex-shrink-0'>
                          <a href={post.author.href}>
                            <span className='sr-only'>{post.author.name}</span>
                            <img
                              className='h-10 w-10 rounded-full'
                              src={post.author.imageUrl}
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='ml-3'>
                          <p className='text-sm font-medium text-gray-900'>
                            <a
                              href={post.author.href}
                              className='hover:underline'
                            >
                              {post.author.name}
                            </a>
                          </p>
                          <div className='flex space-x-1 text-sm text-gray-500'>
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden='true'>&middot;</span>
                            <span>{post.readingTime} read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
