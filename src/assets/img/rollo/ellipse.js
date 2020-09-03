import React from 'react';

function Icon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      fill="none"
      viewBox="0 0 4 4"
      style={{
        position: 'relative',
        top: -2,
        margin: '0px 5px',
      }}
    >
      <circle cx="2" cy="2" r="2" fill={color} />
    </svg>
  );
}

export default Icon;
