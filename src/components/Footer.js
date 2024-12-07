import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center">
      <div className="container">
        <p className="mb-2">&copy; 2024 zheng xiaoli. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" aria-label="Facebook">
            <img src="facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src="twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

