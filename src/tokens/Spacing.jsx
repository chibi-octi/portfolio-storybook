import React from 'react';

/**
 * Spacing tokens display component
 */
export const SpacingTokens = () => {
  const spacingScale = [
    { name: '0', value: '0px', class: 'w-0' },
    { name: '1', value: '0.25rem', class: 'w-1' },
    { name: '2', value: '0.5rem', class: 'w-2' },
    { name: '3', value: '0.75rem', class: 'w-3' },
    { name: '4', value: '1rem', class: 'w-4' },
    { name: '5', value: '1.25rem', class: 'w-5' },
    { name: '6', value: '1.5rem', class: 'w-6' },
    { name: '8', value: '2rem', class: 'w-8' },
    { name: '10', value: '2.5rem', class: 'w-10' },
    { name: '12', value: '3rem', class: 'w-12' },
    { name: '16', value: '4rem', class: 'w-16' },
    { name: '20', value: '5rem', class: 'w-20' },
    { name: '24', value: '6rem', class: 'w-24' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Spacing Scale</h3>
      <div className="space-y-3">
        {spacingScale.map(({ name, value, class: className }) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-24 text-sm font-mono text-gray-600">
              {name}
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className={`${className} h-4 bg-blue-500 rounded`} />
              <span className="text-sm text-gray-600">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
