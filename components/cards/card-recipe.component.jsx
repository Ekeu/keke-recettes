import Link from 'next/link';

export default function CardRecipe({ recipe }) {
  const {
    imageUrl,
    category,
    title,
    description,
    author,
    datetime,
    date,
    readingTime,
  } = recipe;
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={imageUrl} alt='' />
      </div>
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium font-hind text-rose-500'>
            <span className='hover:underline'>{category.name}</span>
          </p>
          <Link href={post.href} className='block mt-2'>
            <p className='text-xl font-semibold font-hind text-blue-gray-800'>
              {title}
            </p>
            <p className='mt-3 text-base text-blue-gray-500 font-hind'>
              {description}
            </p>
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <span>
              <span className='sr-only font-hind'>{author.name}</span>
              <img
                className='h-10 w-10 rounded-full'
                src={author.imageUrl}
                alt={author.name}
              />
            </span>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium font-hind text-blue-gray-800'>
              <span className='hover:underline'>{author.name}</span>
            </p>
            <div className='flex space-x-1 font-hind text-sm text-blue-gray-500'>
              <time dateTime={datetime}>{date}</time>
              <span aria-hidden='true'>&middot;</span>
              <span>{readingTime} de lecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
