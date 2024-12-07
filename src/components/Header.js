import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header bg-dark text-white">
      <div className="container flex justify-between items-center">
        <h1 className="h1">Association XYZ</h1>
        <Navbar
          links={[
            { href: '#presentation', label: 'Présentation' },
            { href: '#services', label: 'Services' },
            { href: '#testimonials', label: 'Témoignages' },
            { href: '#contact', label: 'Contact' },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
