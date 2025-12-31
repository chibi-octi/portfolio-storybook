import React from 'react';

/**
 * Color tokens display component
 */
export const ColorTokens = () => {
  const colorPalette = {
    primary: {
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#3b82f6',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#1e3a8a',
    },
    gray: {
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827',
    },
  };

  return (
    <div className="space-y-8">
      {Object.entries(colorPalette).map(([name, shades]) => (
        <div key={name}>
          <h3 className="text-lg font-semibold mb-4 capitalize">{name}</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {Object.entries(shades).map(([shade, color]) => (
              <div key={shade} className="space-y-2">
                <div
                  className="w-full h-16 rounded-lg border border-gray-200"
                  style={{ backgroundColor: color }}
                />
                <div className="text-xs">
                  <div className="font-mono font-semibold">{shade}</div>
                  <div className="text-gray-600">{color}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
