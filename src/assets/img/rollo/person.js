import React from 'react';

function Icon({ color = '#304C82', className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm2 4c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm4 10c-.2-.71-3.3-2-6-2-2.69 0-5.77 1.28-6 2h12zM0 14c0-2.66 5.33-4 8-4s8 1.34 8 4v2H0v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
