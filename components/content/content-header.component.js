import { RECIPE_CATEGORIES } from '@/constants/categories.contants';

export default function ContentHeader({ category, title }) {
  return (
    <h1>
      <span
        className={`block text-base text-center ${
          RECIPE_CATEGORIES.find((cat) => cat.value === category).color.split(
            ' '
          )[1]
        } font-semibold font-hind tracking-wide uppercase`}
      >
        {category}
      </span>
      <span className='mt-2 block text-3xl text-center leading-8 font-extrabold font-hind tracking-tight text-blue-gray-800 dark:text-white sm:text-4xl'>
        {title}
      </span>
    </h1>
  );
}
