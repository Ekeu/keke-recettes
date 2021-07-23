import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

import { RECIPE_CATEGORIES } from '@/constants/categories.contants';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CardListRecipe({ recipe }) {
  const { category, slug, title, description, author, _updatedAt } = recipe;
  return (
    <div>
      <div className='mb-4'>
        <span className='inline-block'>
          <span
            className={classNames(
              RECIPE_CATEGORIES.find((cat) => cat.value === category).color,
              'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-hind capitalize'
            )}
          >
            {category}
          </span>
        </span>
      </div>
      <Link
        href={'/recipes/[slug]'}
        as={`/recipes/${slug}`}
        className='block'
      >
        <span className='cursor-pointer'>
          <p className='text-xl font-semibold font-hind text-blue-gray-800 dark:text-white'>
            {title}
          </p>
          <p className='mt-3 text-base font-hind text-blue-gray-500 dark:text-blue-gray-300'>
            {description}
          </p>
        </span>
      </Link>
      <div className='mt-6 flex items-center'>
        <div className='flex-shrink-0'>
          <span>
            <span className='sr-only'>{author?.name}</span>
            <img
              className='h-10 w-10 rounded-full'
              src={author?.avatar}
              alt={author?.name}
            />
          </span>
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium font-hind text-blue-gray-800 dark:text-white'>
            <span>{author?.name}</span>
          </p>
          <div className='flex space-x-1 text-sm font-hind text-blue-gray-500 dark:text-blue-gray-300'>
            <time dateTime={_updatedAt}>{moment(_updatedAt).format('ll')}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
