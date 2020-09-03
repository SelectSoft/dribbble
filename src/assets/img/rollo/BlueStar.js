import React from 'react';

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
      className={className}
    >
      <path
        fill="#304C82"
        d="M8 11.953l4.635 2.797-1.23-5.273L15.5 5.93l-5.393-.457L8 .5 5.893 5.473.5 5.93l4.095 3.547-1.23 5.273L8 11.953z"
      />
    </svg>
  );
}

export default Icon;
