import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Sofa from '../assets/sofa.png';
import Dining_Table from '../assets/dining_table.png';
import Coffee_Table from '../assets/coffee_table.png';
import Bed_Frame from '../assets/bed_frame.png';

// Sample data for the home products
const products = [
  {
    id: 1,
    name: 'Sofa Set',
    description: 'Comfortable and stylish sofa set.',
    price: '$250',
    rating: 4,
    imageUrl: Sofa,
  },
  {
    id: 2,
    name: 'Dining Table',
    description: 'Elegant dining table for family dinners.',
    price: '$180',
    rating: 5,
    imageUrl: Dining_Table,
  },
  {
    id: 3,
    name: 'Coffee Table',
    description: 'Modern coffee table for your living room.',
    price: '$50',
    rating: 4,
    imageUrl: Coffee_Table,
  },
  {
    id: 4,
    name: 'Bed Frame',
    description: 'Durable and stylish bed frame.',
    price: '$300',
    rating: 5,
    imageUrl: Bed_Frame,
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card" id="projects" >
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <p className="product-description">{product.description}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <div className="rating">
          {'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function ProductGrid() {
  useEffect(() => {
    ScrollReveal().reveal('.product-card', {
      duration: 800,
      distance: '50px',
      easing: 'ease-out',
      origin: 'bottom',
      interval: 100,
      opacity: 0,
      reset: true, // Set to true if you want the animation to reset on scroll up
    });
  }, []);

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductGrid;
