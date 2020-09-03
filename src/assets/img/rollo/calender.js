import React from 'react';

function Icon({ color = '#304C82' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M15 2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2a2 2 0 01-2-2L.01 4C.01 2.9.89 2 2 2h1V0h2v2h8V0h2v2zM2 8v10h14V8H2zm14-2H2V4h14v2zm-2 5H9v5h5v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
