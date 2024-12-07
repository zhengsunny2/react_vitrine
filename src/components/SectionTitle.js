import React from 'react';

function SectionTitle({ text, className }) {
  return <h2 className={`h2 ${className}`}>{text}</h2>;
}

export default SectionTitle;
