const FilterButton = ({
  onClick,
  textColor,
  filterAttribute,
  bgHoverColor,
  FirstSortIcon,
  SecondSortIcon,
  firstSRDescriptionText,
  secondSRDescriptionText,
  containerClassName='bg-rose-100',
}) => {
  return (
    <div
      className={`${containerClassName} p-0.5 rounded-lg items-center sm:flex`}
    >
      <button
        type='button'
        onClick={onClick}
        className={`p-1.5 rounded-md ${textColor} ${
          filterAttribute
            ? 'bg-white shadow-sm'
            : `${bgHoverColor} hover:shadow-sm`
        } focus:outline-none`}
      >
        <FirstSortIcon className='h-5 w-5' aria-hidden='true' />
        <span className='sr-only'>{firstSRDescriptionText}</span>
      </button>
      <button
        type='button'
        onClick={onClick}
        className={`ml-0.5 p-1.5 ${
          !filterAttribute
            ? 'bg-white shadow-sm'
            : `${bgHoverColor} hover:shadow-sm`
        } rounded-md ${textColor} focus:outline-none`}
      >
        <SecondSortIcon className='h-5 w-5' aria-hidden='true' />
        <span className='sr-only'>{secondSRDescriptionText}</span>
      </button>
    </div>
  );
};

export default FilterButton;
