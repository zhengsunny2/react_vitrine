import React from 'react';
import SectionTitle from '../components/SectionTitle';

function Presentation() {
  return (
    <section id="presentation" className="section bg-gray text-center">
      <div className="container">
        <SectionTitle text="Bienvenue chez Association XYZ" className="mb-4" />
        <p className="p">Nous sommes dédiés à apporter des changements positifs dans notre communauté.</p>
      </div>
    </section>
  );
}

export default Presentation;

