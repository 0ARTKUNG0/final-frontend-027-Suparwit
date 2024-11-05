import React from 'react'
import actor from '../assets/art.jpg';

function FeaturedBox() {

  return (
    <section className='featured-box' id='home'>
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Home_Product</span>
        </div>
        <div className="featured-name">
          Shop <span className='typedText'>Home Products</span>
        </div>
        <div className="featured-text-info">
          <p>
          Discover the finest home products designed to enhance your living experience. Our collection features innovative and high-quality items that combine functionality with style. Whether you're looking to upgrade your kitchen, living room, or any other space in your home, we have the perfect solutions to meet your needs.
          </p>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/0suparwit0/">
              <i className='uil uil-instagram-alt'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/Supparwit">
              <i className='uil uil-facebook'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/0ARTKUNG0">
              <i className='uil uil-github-alt'></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className='scroll-btn'>
          <i className='uil uil-mouse-alt'></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  )
}

export default FeaturedBox
