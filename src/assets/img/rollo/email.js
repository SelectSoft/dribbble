import React from 'react';

function Icon({ color = '#304C82', className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm-8 7L4 8v10h16V8l-8 5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
