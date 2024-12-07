import React from 'react';

function Testimonial({ name, content, image }) {
  return (
    <div className="testimonial p-4 rounded shadow bg-gray">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2" />
      <p className="p italic mb-2">"{content}"</p>
      <h4 className="text-gray-700 font-bold">{name}</h4>
    </div>
  );
}

export default Testimonial;
