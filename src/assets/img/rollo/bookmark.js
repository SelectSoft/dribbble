import React from 'react';

function Icon({ color = '#304C82', className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      viewBox="0 -2 24 24"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 3h10c1.1 0 2 .9 2 2v14.483a1 1 0 01-1.394.92l-5.212-2.234a1 1 0 00-.788 0l-5.212 2.234A1 1 0 015 19.483V5c0-1.1.9-2 2-2zm5 12.82L17 18V5H7v13l5-2.18z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
