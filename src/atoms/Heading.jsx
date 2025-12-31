import React from 'react';
import clsx from 'clsx';

/**
 * Heading component - A basic heading atom
 */
export const Heading = ({
  level = 1,
  children,
  className,
  ...props
}) => {
  const Tag = `h${level}`;
  
  const sizeStyles = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-medium',
    6: 'text-base font-medium',
  };

  return (
    <Tag
      className={clsx(sizeStyles[level], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
