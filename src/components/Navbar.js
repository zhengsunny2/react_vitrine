import React from 'react';

function Navbar({ links }) {
  return (
    <nav className="flex space-x-4">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="hover-underline">
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
