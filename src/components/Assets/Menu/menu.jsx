import React, {useState} from 'react'
import './menu.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'

import { useNavigate } from 'react-router-dom'
const menu = () => {
  
    navigation = useNavigate();

    let [counter, handleCounter] = useState(0)

    const loginButton = () => {
        navigation('/');
    }

    return (
    <div>
          <div className="navbar">
                <div className="navdiv">
                    <div className="logo">Menu</div>
                    <ul className='navElements'>
                        <li onClick={()=> {navigation('/home')}}>Home</li>
                        <li onClick={() => {navigation('/about')}}>About</li>
                        <li>Contact</li>
                        <li>Menu</li>
                        <div className="cart">
                        <img src={shoppingcart}/>
                        {counter===0?<div></div>:<div className='bubble'>{counter}</div>}
                        </div>
                        <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="card">
                    <img src={Burger}/>
                    <h1>Daniel's Burger</h1>
                    <div className="price">
                    <h3>$7.99</h3>
                    <h4>750 CAL</h4>
                    </div>
                    <div className="orderButton second" onClick={()=> {handleCounter(counter = counter +1)}} >Add to Cart</div>
                </div>
                <div className="card">
                    <img src={Fries}/>
                    <h1>Daniel's Fries</h1>
                    <div className="price"> 
                    <h3>$2.99</h3>
                    <h4>400 CAL</h4>
                    </div>
                    <div className="orderButton second" onClick={()=> {handleCounter(counter = counter +1)}} >Add to Cart</div>
                </div>
                <div className="card">
                    <img src={Pizza}/>
                    <h1>Daniel's Pizza</h1>
                    <div className="price">
                    <h3>$3.99</h3>
                    <h4>250 CAL</h4>
                    </div>
                    <div className="orderButton second" onClick={()=> {handleCounter(counter = counter +1)}} >Add to Cart</div>                
                </div>
                <div className="card">
                    <img src={Tacos}/>
                    <h1>Daniel's Tacos</h1>
                    <div className="price">
                    <h3>$5.99</h3>
                    <h4>500 CAL</h4>
                    </div>
                    <div className="orderButton second" onClick={()=> {handleCounter(counter = counter +1)}} >Add to Cart</div>
                </div>
            </div>
            
    </div>
  )
}
export default menu;