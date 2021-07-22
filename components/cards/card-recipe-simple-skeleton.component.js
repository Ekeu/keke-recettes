export default function CardListRecipeSkeleton() {
  return (
    <div>
      <div className='mb-4'>
        <span className='inline-block'>
          <div className='bg-blue-gray-300 rounded inline-flex px-6 py-2 animate-pulse'></div>
        </span>
      </div>
      <span className='cursor-pointer'>
        <div className='h-4 bg-blue-gray-300 rounded animate-pulse'></div>
        <div className='mt-3 h-4 bg-blue-gray-300 rounded w-5/6 animate-pulse'></div>
      </span>
      <div className='mt-6 flex items-center'>
        <div className='flex-shrink-0'>
          <span>
            <div className='rounded-full bg-blue-gray-300 h-12 w-12 animate-pulse'></div>
          </span>
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium font-hind text-blue-gray-800'>
            <div className='h-2 bg-blue-gray-300 rounded animate-pulse w-24'></div>
          </p>
          <div className='flex space-x-1 text-sm font-hind text-blue-gray-500'>
            <div className='h-2 bg-blue-gray-300 rounded w-12 animate-pulse mt-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
