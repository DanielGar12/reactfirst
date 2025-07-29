import React from 'react'
import './about.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import { useNavigate } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'


 const about = () => {
    const navigation = useNavigate();

    const loginButton = () => {
        navigation('/')
    }

    const def = {
        center: {
            lat:  33.22305,
            lng:  -96.95638
        },
        zoom: 15
    };

  return (
    <div className='aboutPage'>
        <div className="navbar">
            <div className="navdiv">
                <div className="logo">Welcome</div>
                <ul className='navElements'>
                    <li onClick={() => {navigation('/home')}}>Home</li>
                    <li>About</li>
                    <li onClick={() => {navigation('/contact')}}>Contact</li>
                    <li onClick={() => {navigation('/menu')}}>Menu</li>
                    <img src={shoppingcart} onClick={()=> {navigation('/cart')}}/>
                    <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                </ul>
            </div>

        </div>
        <div className="jumbo">
           <div className="titleBub">About Us</div> 
        </div>
        <div className="aboutbox">
            <h1>Our Story</h1>
            <div className="abouttext">
                <p>Welcome to Daniel’s, where cravings collide and flavor reigns supreme! Nestled in the heart of the city, Daniel’s is your go-to spot for the ultimate comfort food experience. Whether you're in the mood for cheesy, handcrafted pizzas, juicy, flame-grilled burgers, or bold, flavor-packed tacos — we've got something that hits the spot every time.</p>
                <p>At Daniel’s, we believe food should be fun, fast, and unforgettable. That’s why we take pride in using only the freshest ingredients, house-made sauces, and creative toppings that bring a twist to the classics you love. Every bite tells a story — whether it’s the sizzling street-style tacos, our stacked-to-the-max burgers, or our crispy-crust pizzas with a punch of personality.</p>
                <p>Perfect for late-night bites, family dinners, or casual hangouts, Daniel’s is more than a restaurant — it’s a vibe. Come hungry, leave happy, and always come back for more.</p>
            </div>
            <GoogleMapReact bootstrapURLKeys={{key: ""}}
                defaultCenter={def.center}
                defaultZoom={def.zoom}
            >

            </GoogleMapReact>
        </div>
    </div>
  )
}

export default about;
