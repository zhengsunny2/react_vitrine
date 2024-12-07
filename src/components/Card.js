import React from 'react';

function Card({ title, content, image }) {
  return (
    <div className="card shadow rounded p-4 bg-gray">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="h3 mb-2">{title}</h3>
      <p className="p">{content}</p>
    </div>
  );
}

export default Card;
