export default function ContentHeader({ category, title }) {
  return (
    <h1>
      <span className='block text-base text-center text-rose-500 font-semibold font-hind tracking-wide uppercase'>
        {category}
      </span>
      <span className='mt-2 block text-3xl text-center leading-8 font-extrabold font-hind tracking-tight text-blue-gray-900 sm:text-4xl'>
        {title}
      </span>
    </h1>
  );
}
