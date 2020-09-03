import React from 'react';

function Icon({ color = '#304C82', className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.659 0c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41L16.369.29c-.2-.2-.45-.29-.71-.29zm-3.6 6.02l.92.92L3.919 16h-.92v-.92l9.06-9.06zM.999 14.25l11.06-11.06 3.75 3.75L4.749 18H.999v-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
