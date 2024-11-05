import React from 'react';
import HomeProductImage1 from '../assets/HomeProduct1.png';
import HomeProductImage2 from '../assets/HomeProduct2.png';

const AboutBox = () => {
  return (
    <section className="about-section" id="about">
      <div className="top-header">
        <h1>About Our Products</h1>
        <p>Enhance your home with quality and style</p>
      </div>

      {/* First Row */}
      <div className="about-row">
        <div className="about-col">
          <img src={HomeProductImage1} alt="Home Product" className="about-image" />
        </div>
        <div className="about-col">
          <h2>Transform your <span className="highlight">living space</span></h2>
          <p>
            Discover our range of stylish and functional home products. Each item is crafted with precision and care,
            ensuring it enhances the comfort and elegance of your home.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="about-row reverse">
        <div className="about-col">
          <h2>Come home to <span className="highlight">quality and style</span></h2>
          <p>
            From contemporary designs to timeless pieces, our collection offers something for every room.
            Make your space truly yours with our exclusive selection of home products.
          </p>
        </div>
        <div className="about-col">
          <img src={HomeProductImage2} alt="Home Product" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default AboutBox;