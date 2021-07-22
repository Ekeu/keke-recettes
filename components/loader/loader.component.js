import SpinSVG from '../spin-svg/spin-svg.component';

const Loader = ({
  size = 'h-6 w-6',
  color = 'text-white',
  containerClassName,
  className,
}) => {
  return (
    <div className={`${containerClassName} sm:mx-auto sm:w-full sm:max-w-md`}>
      <div className={`${className || 'px-11'} flex justify-center`}>
        <SpinSVG size={size} color={color} />
      </div>
    </div>
  );
};

export default Loader;
