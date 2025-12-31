import React from 'react';
import clsx from 'clsx';
import { Header } from '../organisms/Header';

/**
 * PageLayout component - A page template
 */
export const PageLayout = ({
  header,
  sidebar,
  children,
  footer,
  className,
  ...props
}) => {
  return (
    <div className={clsx('min-h-screen flex flex-col', className)} {...props}>
      {/* Header */}
      {header && (
        <div className="flex-shrink-0">
          {header}
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebar && (
          <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
            {sidebar}
          </aside>
        )}

        {/* Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="flex-shrink-0 bg-gray-100 border-t border-gray-200 p-6">
          {footer}
        </footer>
      )}
    </div>
  );
};
