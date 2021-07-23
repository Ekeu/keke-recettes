import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

import { urlFor } from '@/lib/api';

export default function CardRecipe({ recipe }) {
  const {
    coverImage,
    category,
    slug,
    title,
    description,
    author,
    _updatedAt,
  } = recipe;
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={urlFor(coverImage).url()} alt={title} />
      </div>
      <div className='flex-1 bg-white dark:bg-blue-gray-700 p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium font-hind text-rose-500 dark:text-white'>
            <span className='capitalize'>{category}</span>
          </p>
          <Link
            href={'/recipes/[slug]'}
            as={`/recipes/${slug}`}
            className='block mt-2'
          >
            <span className='cursor-pointer'>
              <p className='text-xl font-semibold font-hind text-blue-gray-800 dark:text-white'>
                {title}
              </p>
              <p className='mt-3 text-base text-blue-gray-500 font-hind dark:text-blue-gray-200'>
                {description}
              </p>
            </span>
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <span>
              <span className='sr-only font-hind'>{author.name}</span>
              <img
                className='h-10 w-10 rounded-full'
                src={author.avatar}
                alt={author.name}
              />
            </span>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium font-hind text-blue-gray-800 dark:text-white'>
              <span className='hover:underline'>{author.name}</span>
            </p>
            <div className='flex space-x-1 font-hind text-sm text-blue-gray-500 dark:text-blue-gray-200'>
              <time dateTime={_updatedAt}>
                {moment(_updatedAt).format('ll')}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
