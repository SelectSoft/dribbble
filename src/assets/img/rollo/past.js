import React from 'react';

function Icon({ color = '#304C82' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 4h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2zM5 20h14V10H5v10zM5 8V6h14v2H5zm11.49 4.53l-5.93 5.93-3.17-3.17 1.06-1.06 2.11 2.11 4.87-4.87 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
