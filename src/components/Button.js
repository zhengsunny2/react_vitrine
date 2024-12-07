import React from 'react';

function Button({ text, href, className }) {
  return (
    <a href={href} className={`btn ${className}`}>
      {text}
    </a>
  );
}

export default Button;
