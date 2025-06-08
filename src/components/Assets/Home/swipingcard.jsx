// CardSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css"
import Burger from './burger.jpg'
import Fries from './fries.jpg'
import Pizza from './pizza.jpg'
import Taco from './taco.jpg'
import { useNavigate } from "react-router-dom";

const CardSlider = () => {
  const cards = [
    { image: Burger,title: "Hamburger", description: "Sink your teeth into a burger so good, it whispers your name. Daniel`'s Burgers are hand-crafted with 100% mystery meat (probably beef), toasted buns kissed by the gods of grill marks, and secret sauces that Daniel swears he didn’t steal from a cartoon chef. Every bite is a journey into flavor… and possibly into a food coma."},
    { image: Fries,title: "Fries", description: "Golden, seasoned, and possibly addictive. Daniel’s Fries are fried to perfection using a technique he developed while watching late-night cooking shows half-asleep. They’re crispy on the outside, fluffy on the inside, and come with a side of sass. You can dip them in ketchup, cheese, or Daniel’s famous “mystery dip” (which changes daily depending on his mood and what’s in the fridge)." },
    { image: Pizza,title: "Pizza", description: "Daniel’s Pizza isn’t just food—it’s a lifestyle. Each slice is a chaotic masterpiece: gooey cheese, zesty sauce, and toppings that range from classic to “why not?” Whether you go for the Pepperoni Apocalypse or the Pineapple Redemption, one thing’s for sure—you’ll be dreaming of the next slice before you’ve finished the crust." },
    { image: Taco,title: "Taco", description: "This isn’t just a taco. It’s Daniel’s Taco—a handheld masterpiece of mayhem and flavor. Crafted with a shell so perfectly crisp it echoes like a drum solo when you bite it, this taco holds a chaotic blend of seasoned beef (or something like it), shredded cheese rainstorms, and lettuce so fresh it still thinks it’s in the garden. Topped with Daniel’s signature “Mildly Dangerous Sauce™,” it’s spicy, mysterious, and probably has a backstory. Warning: May cause spontaneous dancing and unreasonable cravings at 2AM." },
    
    
  ];

  const navigation = useNavigate();

  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div style={styles.card}>
            <div className="cardContent">    
            <img src={card.image}/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="orderButton" onClick={() => {navigation('/menu')}}>Order Now</div>
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
    background: "#3c009d",
    borderRadius: "20px",
    boxShadow: "12px 4px 12px 12px rgba(0,0,0,0.1)",
    width: "500px",
    height: "700px",
    display: "flex",
    marginLeft: "150px", 
  },
};

export default CardSlider;
