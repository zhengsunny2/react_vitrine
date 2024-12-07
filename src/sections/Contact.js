import React from 'react';
import Button from '../components/Button';

function Contact() {
  return (
    <section id="contact" className="section bg-white text-center">
      <div className="container">
        <h2 className="h2 mb-4">Contactez-nous</h2>
        <p className="p mb-4">Email: zhengsunny2@gmail.com</p>
        <Button text="Envoyez-nous un email" href="zhengsunny2@gmail.com" className="bg-dark text-white rounded px-4 py-2" />
      </div>
    </section>
  );
}

export default Contact;
