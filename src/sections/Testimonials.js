import React from 'react';
import Testimonial from '../components/Testimonial';

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-gray text-center">
      <div className="container grid grid-cols-3 gap-4">
        <Testimonial
          name="Jean Dupont"
          content="Cette association m'a beaucoup aidé."
          image="jean.jpg"
        />
        <Testimonial
          name="Marie Curie"
          content="Un réel plaisir de collaborer avec eux."
          image="marie.jpg"
        />
        <Testimonial
          name="Albert Einstein"
          content="Une équipe formidable et très impliquée."
          image="albert.jpg"
        />
      </div>
    </section>
  );
}

export default Testimonials;
