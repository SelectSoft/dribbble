import React from 'react';

function Icon({ color = '#304C82' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      viewBox="0 -3 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 2v13.17L18.83 16H4V4h16zM6 12h12v2H6v-2zm12-3H6v2h12V9zM6 6h12v2H6V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
