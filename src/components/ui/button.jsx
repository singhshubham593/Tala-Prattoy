import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}