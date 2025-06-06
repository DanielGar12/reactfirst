import React, {useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
// import { Swiper } from 'swiper/types'
import CardSlider from './swipingcard'
import shoppingcart from './shopping-cart.png'

const Home = () => {
  const [action, setAction] = useState("Hello")
  navigation = useNavigate();
  const loginButton = () => {
    navigation('/')
  }


  return (
    <div>
    <div className="navbar">
        <div className="navdiv">
            <div className="logo">Welcome</div>
            <ul className='navElements'>
                <li>Home</li>
                <li onClick={() => {navigation('/about')}}>About</li>
                <li>Contact</li>
                <li onClick={() => {navigation('/menu')}}>Menu</li>
                <img src={shoppingcart}/>
                <div className="loginbutton" onClick={()=> {loginButton()}}>Login</div>
            </ul>
        </div>
    </div>
    
    <div className='content'>
      
    <div className="rotating">
      <h1 onClick={() => {action==="Hello"?setAction("Hola"): setAction("Hello")}}>{action}</h1>
    </div>
    <div className="title"><h1>Daniel's</h1></div>
    </div>
    <div className="main">
    <p>asdf</p>
      <CardSlider/>
    </div>
    </div>
  )
}

export default Home;
