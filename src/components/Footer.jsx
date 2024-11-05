import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <h1>Home Product</h1>
      </div>

      <div className="middle-footer">
        <ul className="footer-menu">
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#projects" className="nav-link">Product</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social_icons">
        <a href="https://www.instagram.com/Aomezzz_0_o" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://www.facebook.com/aomezzz" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="https://www.github.com/aomezzz" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>

      <div className="bottom-footer">
        <p>
          Copyright © <a href="https://www.yoursite.com">Suparwit</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
