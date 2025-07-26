import React, {useState} from 'react'
import './purchased.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
 import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import Trash from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/trash.png'
import Check from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/checked.png'
import { useNavigate } from 'react-router-dom'


 function Purchased() {
    
    const navigation = useNavigate();
    const counter = 0;

    const loginButton = () => {
        navigation('/');
    }
  
    return (
    <div className='pBody'>
        <div className="navbar">
                              <div className="navdiv">
                                  <div className="logo">Menu</div>
                                  <ul className='navElements'>
                                      <li onClick={()=> {navigation('/home')}}>Home</li>
                                      <li onClick={() => {navigation('/about')}}>About</li>
                                      <li>Contact</li>
                                      <li onClick={() => {navigation('/menu')}}>Menu</li>
                                      <div className="cart">
                                      <img src={shoppingcart}/>
                                          
                                        
                                          
                                    
                                      {counter===0?<div></div>:<div className='bubble'>{counter}</div>}
                                      </div>
                                      <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                                  </ul>
                              </div>
                          </div>
                            <div className="area">

                          <div className="purchasedBox">
                            <div className="purchasedContent">

                            <img src={Check}/>
                            <div className="purchasetitle">WOoHoo!!</div>
                            <div className="paragraph">
                                Thank you for eating at Daniel's!! Your order will be ready soon!!
                            </div>

                            <div className="homebutton" onClick={() => {navigation('/home')}}>
                                Home
                            </div>


                            </div>
                          </div>
                            </div>
    </div>
  )
}

export default Purchased;
