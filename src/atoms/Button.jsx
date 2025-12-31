import React from 'react';
import clsx from 'clsx';

/**
 * Button component - A basic button atom
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
    : 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      type="button"
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles,
        disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
