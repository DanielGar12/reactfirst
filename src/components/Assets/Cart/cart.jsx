import React, {useState} from 'react'
import './cart.css'
 import '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/Home'
 import shoppingcart from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/shopping-cart.png'
import Burger from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/burger.jpg'
import Fries from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/fries.jpg'
import Pizza from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/pizza.jpg'
import Tacos from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/taco.jpg'
import Trash from '/Users/garci/reactweb/my-react-website/src/components/Assets/Home/trash.png'
import { useNavigate } from 'react-router-dom'

 const Cart = () => {
  const counter = 0;
  navigation = useNavigate();
  const [ifCard, setCard] = useState(false);
  const [ifSelect, setSelect] = useState("payCard");
  const [ifExpand, setExpand] = useState("cartbox");
  const [ifCash, setCash] = useState(false);
  const [ifSelectC, setSelectC] = useState("payCash");


  const loginButton = () => {
    navigation('/')
  }

  return (
    <div class="cartbody">
       <div className="navbar">
                      <div className="navdiv">
                          <div className="logo">Menu</div>
                          <ul className='navElements'>
                              <li onClick={()=> {navigation('/home')}}>Home</li>
                              <li onClick={() => {navigation('/about')}}>About</li>
                              <li onClick={() => {navigation('/contact')}}>Contact</li>
                              <li onClick={() => {navigation('/menu')}}>Menu</li>
                              <div className="cart">
                              <img src={shoppingcart}/>
                                  
                                
                                  
                            
                              {counter===0?<div></div>:<div className='bubble'>{counter}</div>}
                              </div>
                              <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
                          </ul>
                      </div>
                  </div>

                  <div className="jumb">Your Cart</div>
                  <div className="body">

                     <div className={ifExpand}>
                      <div className="titlebox">

                          <div className="cartTitle">Let's Eat!!</div>
                          <div className="underline"></div>
                      </div>
                      <div className="cartItems">
                        <div className="cartitem">
                          <img src={Burger}/> 
                          <h2>Daniel's Burger</h2>
                          <h3>$10.99</h3>
                          <div className="trash">
                            <img src={Trash}/>
                          </div>
                        </div>
                      </div>
                      <div className="cartBot">
                        <div className={ifSelectC} onClick={()=> {if (!ifCash){ setCash(true); setSelectC("payCash hover"); setExpand("cartbox expand"); setSelect("payCard"); setCard(false)} else{ setCash(false); setSelectC("payCash"); setExpand("cartbox")}}}>Pay At The Counter</div>
                       <div className={ifSelect} onClick={() => {if (!ifCard){ setCard(true); setSelect("payCard hover"); setExpand("cartbox expand"); setCash(false); setSelectC("payCash")} else{ setCard(false); setSelect("payCard"); setExpand("cartbox")}} }>Pay With Card</div>
                      </div>

                      {ifCard? 
                      <div className="cardPay">
                        <div className="cardTitle">
                        <h2>Enter Payment Details</h2>

                        </div>
                        <div className="details">
                          <div className="detail">
                             <label>Full Name:</label>
                             <input placeholder='Full Number'/>
                          </div>
                          <div className="detail">
                            <label>Card Number:</label>
                            <input placeholder='Card Number'/>
                          </div>
                          <div className="detail">
                            <label>Exp Data:</label>
                            <input placeholder='Exp Date'/>
                          </div>
                          <div className="detail">
                            <label>CVV:</label>
                            <input placeholder='CVV' type='number'/>
                          </div>
                         


                        </div>
                        <div className="payButton" onClick={() => {navigation('/purchased')}}>Pay</div>
                        

                      </div>
                        :ifCash?
                        <div className="cardPay">
                        <div className="cardTitle">
                        <h2>Enter Payment Details</h2>

                        </div>
                        <div className="details">
                          <div className="detail">
                             <label>Full Name:</label>
                             <input placeholder='Full Number'/>
                          </div>
                          <div className="detail">
                            <label>Phone Number:</label>
                            <input placeholder='Phone Number'/>
                          </div>
                          
                         


                        </div>
                        <div className="payButton" onClick={() => navigation('/purchased')}>Pay</div>
                        

                      </div>: 
                        <div></div>}


                     </div> 
                  </div>


    </div>
  )
}

export default Cart;
