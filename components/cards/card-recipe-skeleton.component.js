export default function CardRecipeSkeleton() {
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <div className='bg-blue-gray-300 h-48 w-full animate-pulse'></div>
      </div>
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <div className='h-2 bg-blue-gray-300 rounded w-1/4 animate-pulse mb-2'></div>
          <span className='mt-2'>
            <div className='h-4 bg-blue-gray-300 rounded animate-pulse'></div>
            <div className='mt-3 h-4 bg-blue-gray-300 rounded w-5/6 animate-pulse'></div>
          </span>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <span>
              <div className='rounded-full bg-blue-gray-300 h-12 w-12 animate-pulse'></div>
            </span>
          </div>
          <div className='ml-3'>
            <div className='h-2 bg-blue-gray-300 rounded animate-pulse w-24'></div>
            <div className='flex space-x-1 font-hind text-sm text-blue-gray-gray-500'>
              <div className='h-2 bg-blue-gray-300 rounded w-12 animate-pulse mt-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
