import React from 'react';
import clsx from 'clsx';
import { Button } from '../atoms/Button';

/**
 * Header component - A complex header organism
 */
export const Header = ({
  logo,
  navigation = [],
  actions = [],
  className,
  ...props
}) => {
  return (
    <header
      className={clsx(
        'bg-white border-b border-gray-200',
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || (
              <div className="text-xl font-bold text-gray-900">
                Logo
              </div>
            )}
          </div>

          {/* Navigation */}
          {navigation.length > 0 && (
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                {...action}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
