import Link from 'next/link';

export default function CardRecipe({ recipe }) {
  const { category, title, description, author, datetime, date, readingTime } =
    recipe;
  return (
    <div>
      <div>
        <span className='inline-block'>
          <span
            className={classNames(
              category.color,
              'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-hind'
            )}
          >
            {category.name}
          </span>
        </span>
      </div>
      <Link href={post.href} className='block mt-4'>
        <p className='text-xl font-semibold font-hind text-blue-gray-800'>
          {title}
        </p>
        <p className='mt-3 text-base font-hind text-blue-gray-500'>
          {description}
        </p>
      </Link>
      <div className='mt-6 flex items-center'>
        <div className='flex-shrink-0'>
          <span>
            <span className='sr-only'>{author.name}</span>
            <img
              className='h-10 w-10 rounded-full'
              src={post.author.imageUrl}
              alt={author.name}
            />
          </span>
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium font-hind text-blue-gray-800'>
            <span>{author.name}</span>
          </p>
          <div className='flex space-x-1 text-sm font-hind text-blue-gray-500'>
            <time dateTime={datetime}>{date}</time>
            <span aria-hidden='true'>&middot;</span>
            <span>{readingTime} de lecture</span>
          </div>
        </div>
      </div>
    </div>
  );
}
