import React from 'react';
import Card from '../components/Card';

function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container grid grid-cols-3 gap-4">
        <Card
          title="Ateliers éducatifs"
          content="Des sessions interactives pour apprendre."
          image="atelier.jpg"
        />
        <Card
          title="Support communautaire"
          content="Un accompagnement personnalisé pour chacun."
          image="support.jpg"
        />
        <Card
          title="Événements locaux"
          content="Rejoignez nos événements pour tisser des liens."
          image="events.jpg"
        />
      </div>
    </section>
  );
}

export default Services;

