export default function ContentRecipeImage({ coverImage, title }) {
  return (
    <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
      <figure>
        <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
          <img
            className='rounded-lg shadow-lg object-cover object-center'
            src={coverImage}
            alt={title}
            width={1184}
            height={1376}
          />
        </div>
      </figure>
    </div>
  );
}
