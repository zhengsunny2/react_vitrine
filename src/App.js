import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './sections/Presentation';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Presentation />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
