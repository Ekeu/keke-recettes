import { forwardRef } from 'react';

import Loader from '../loader/loader.component';

const Button = forwardRef(
  (
    {
      children,
      customStyles,
      addStyles,
      loading,
      style,
      disabled,
      size,
      color,
      ...otherProps
    },
    ref
  ) => (
    <button
      ref={ref}
      {...otherProps}
      style={{
        cursor: loading || disabled ? 'not-allowed' : undefined,
        ...style,
      }}
      disabled={disabled}
      className={`${
        customStyles
          ? customStyles
          : disabled
          ? 'border-transparent text-blue-gray-400 bg-blue-gray-100'
          : 'border-transparent text-white bg-rose-500 hover:bg-rose-600'
      } inline-flex items-center py-3 px-6 border rounded-md shadow-sm text-base font-medium font-hind focus:outline-none ${addStyles}`}
    >
      {loading ? <Loader size={size} color={color} /> : children}
    </button>
  )
);

export default Button;
