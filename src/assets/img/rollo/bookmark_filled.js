import React from 'react';

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        fill="#304C82"
        d="M28.333 5H11.666a3.343 3.343 0 00-3.333 3.333v25.15a1 1 0 001.394.92l9.879-4.234a1 1 0 01.788 0l9.878 4.234a1 1 0 001.394-.92V8.334C31.666 6.5 30.166 5 28.333 5z"
      />
    </svg>
  );
}

export default Icon;
