import React, {useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

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
                <li>About</li>
                <li>Contact</li>
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

    </div>
  )
}

export default Home;
