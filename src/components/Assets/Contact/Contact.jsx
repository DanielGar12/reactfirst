import React, {useState} from 'react'
import './Contact.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
 import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import Trash from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/trash.png'
import Check from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/checked.png'
import { useNavigate } from 'react-router-dom'


function Contact() {
  const counter = 0;

  const navigation = useNavigate();

  const loginButton = () => {
    navigation('/')
  }

  return (
    <div className='conbody'>
           <div className="navbar">
                                    <div className="navdiv">
                                        <div className="logo">Menu</div>
                                        <ul className='navElements'>
                                            <li onClick={()=> {navigation('/home')}}>Home</li>
                                            <li onClick={() => {navigation('/about')}}>About</li>
                                            <li>Contact</li>
                                            <li onClick={() => {navigation('/menu')}}>Menu</li>
                                            <div className="cart" onClick={()=> {navigation('/cart')}}>
                                            <img src={shoppingcart}/>
                                                
                                              
                                                
                                          
                                            {counter===0?<div></div>:<div className='bubble'>{counter}</div>}
                                            </div>
                                            <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                                        </ul>
                                    </div>
                                </div>
                              <div className="contactarea">

                                <div className="contactjumb">Contact Us!</div>
                                  <div className="contactbox">
                                    <div className="header">

                                    <div className="contitle">Information</div>
                                    <div className="underline"></div>
                                    
                                    </div>
                                    <div className="coninput">
                                      <div className="names">
                                        <div className="name">
                                          
                                          <label>First Name: </label>
                                          <input type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="name">

                                          <label>Last Name: </label>
                                          <input type="text" placeholder="Last Name"/>
                                        </div>
                                          
                                      </div>
                                      <div className="information">
                                      <div className="info">
                                      <label>Phone Number:</label>
                                      <input type='tel' placeholder='Phone Number'/>

                                      </div>
                                      <div className="info">

                                      <label>Comments:</label>
                                      <textarea name="text" id="text" placeholder='Message' ></textarea>
                                      </div>
                                      <div className="submit">Submit</div>
                                      </div>
                                    </div>
                                </div>
                              </div>

    </div>
  )
}

export default Contact;
