import React, {useState} from 'react'
import './menu.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar'
import search from './search.svg'
import Soda from './soda.jpg'

import { useNavigate } from 'react-router-dom'
const menu = () => {
  
    navigation = useNavigate();

    let [counter, handleCounter] = useState(0)
    const [showSidebar, setShowSidebar] = useState(false);
    
    const loginButton = () => {
        navigation('/');
    }

       const menuItems = [
  {
    name: "Daniel's Burger",
    price: 7.99,
    calories: 750,
    image: Burger,
  },
  {
    name: "Daniel's Fries",
    price: 2.99,
    calories: 400,
    image: Fries,
  },
  {
    name: "Daniel's Pizza",
    price: 3.99,
    calories: 250,
    image: Pizza,
  },
  {
    name: "Daniel's Tacos",
    price: 5.99,
    calories: 500,
    image: Tacos,
  },
  {
    name: "Daniel's Soda",
    price: 1.99,
    calories: 120,
    image: Soda,
  }
];


    return (
    <div>
          <div className="navbar">
                <div className="navdiv">
                    <div className="logo">Menu</div>
                    <ul className='navElements'>
                        <li onClick={()=> {navigation('/home')}}>Home</li>
                        <li onClick={() => {navigation('/about')}}>About</li>
                        <li onClick={() => {navigation('/contact')}}>Contact</li>
                        <li>Menu</li>
                        <div className="cart">
                        <img src={shoppingcart} onClick={() => {navigation('/cart')}}/>
                            
                          
                            
                      
                        {counter===0?<div></div>:<div className='bubble'>{counter}</div>}
                        </div>
                        <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="menuTop">
                    
                <div className="searchBar">
                    <div className="searchicon">
                        <img src={search}/>
                    </div>
                    <div className="searchinput">
                        <input type='text' placeholder='search'/>
                    </div>
                </div>
                </div>
                <div className="cards">
                {menuItems.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.name} />
                        <h1>{item.name}</h1>
                        <div className="price">
                        <h3>${item.price.toFixed(2)}</h3>
                        <h4>{item.calories} CAL</h4>
                        </div>
                        <div className="orderButton second" onClick={() => handleCounter(prev => prev + 1)}>
                        Add to Cart
                        </div>
                    </div>
))}

            </div>
            
    </div>
    </div>
  )
}
export default menu;