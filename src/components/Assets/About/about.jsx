import React from 'react'
import './about.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import { useNavigate } from 'react-router-dom'


 const about = () => {
    const navigation = useNavigate();

    const loginButton = () => {
        navigation('/')
    }

  return (
    <div className='aboutPage'>
        <div className="navbar">
            <div className="navdiv">
                <div className="logo">Welcome</div>
                <ul className='navElements'>
                    <li onClick={() => {navigation('/home')}}>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li onClick={() => {navigation('/menu')}}>Menu</li>
                    <img src={shoppingcart}/>
                    <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                </ul>
            </div>

        </div>
        <div className="jumbo">
           <div className="titleBub">About Us</div> 
        </div>
        <div className="aboutbox">
            <h1>Our Story</h1>
        </div>
    </div>
  )
}

export default about;
