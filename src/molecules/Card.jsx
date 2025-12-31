import React from 'react';
import clsx from 'clsx';

/**
 * Card component - A card molecule combining multiple atoms
 */
export const Card = ({
  title,
  description,
  footer,
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
  };

  return (
    <div
      className={clsx(
        'rounded-lg p-6',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      {children && (
        <div className="mb-4">
          {children}
        </div>
      )}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};
