import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollReveal from 'scrollreveal';

import profilePic from '../assets/profile_pic.png'; // Replace with actual image path

const reviews = [
  {
    name: 'John Doe',
    title: 'Designer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similique culpa et amet explicabo asperiores alias sed consequatur.',
    image: profilePic,
  },
  {
    name: 'Jane Smith',
    title: 'Architect',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similique culpa et amet explicabo asperiores alias sed consequatur.',
    image: profilePic,
  },
  {
    name: 'Alice Johnson',
    title: 'Developer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similique culpa et amet explicabo asperiores alias sed consequatur.',
    image: profilePic,
  },
];

const ReviewBox = () => {
  useEffect(() => {
    ScrollReveal().reveal('.review-card', {
      duration: 800,
      distance: '50px',
      easing: 'ease-out',
      origin: 'bottom',
      interval: 100,
      opacity: 0,
      reset: false, // Animation will only happen once
    });
  }, []);

  return (
    <section className="review-section">
      <div className="review-header">
        <h2>Customer Review</h2>
        <p>Follow instruction for more</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <p className="review-text">"{review.review}"</p>
              <div className="review-author">
                <img src={review.image} alt={review.name} className="author-image" />
                <div>
                  <h3 className="author-name">{review.name}</h3>
                  <p className="author-title">{review.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewBox;
