// CardSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css"
import Burger from './burger.jpg'
import Fries from './fries.jpg'
import Pizza from './pizza.jpg'

const CardSlider = () => {
  const cards = [
    { image: Burger,title: "Card 1", description: "This is card one" },
    { image: Fries,title: "Card 2", description: "This is card two" },
    { image: Pizza,title: "Card 3", description: "This is card three" },
  ];

  return (
    <Swiper spaceBetween={20} slidesPerView={1.2}>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div style={styles.card}>
            <div className="cardContent">    
            <img src={card.image}/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const styles = {
  card: {
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};

export default CardSlider;
