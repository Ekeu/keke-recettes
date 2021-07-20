export default function ContentRecipeImage({ coverImage, title }) {
  return (
    <div className='pb-5/6 relative mt-8'>
      <img
        className='h-full w-full object-cover absolute rounded-lg shadow-md'
        src={coverImage}
        alt={title}
      />
    </div>
  );
}
