import moment from 'moment';

export default function ContentAuthor({ author, updatedAt }) {
  return (
    <div className='relative bg-white rounded-lg shadow-lg'>
      <cite className='relative flex items-center sm:items-start bg-rose-500 rounded-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10'>
        <div className='relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2'>
          <img
            className='w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-rose-300'
            src={author?.avatar}
            alt={author?.name}
          />
        </div>
        <span className='relative ml-4 font-semibold leading-6 sm:ml-24 sm:pl-1'>
          <p className='text-white font-semibold font-hind sm:inline'>
            {author?.name}
          </p>{' '}
          <p className='sm:inline font-hind text-white'>
            {' '}
            | {moment(updatedAt).format('ll')}
          </p>
        </span>
      </cite>
    </div>
  );
}
