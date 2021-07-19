export default function ContentHeader({ category, title }) {
  return (
    <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
      <div>
        <h2 className='text-base text-rose-500 font-semibold font-hind tracking-wide uppercase'>
          {category}
        </h2>
        <h3 className='mt-2 text-3xl leading-8 font-extrabold font-hind tracking-tighter text-blue-gray-800 sm:text-4xl'>
          {title}
        </h3>
      </div>
    </div>
  );
}
