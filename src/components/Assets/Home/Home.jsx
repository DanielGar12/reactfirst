import React, {useState} from 'react'
import './Home.css'
 

const Home = () => {
  const [action, setAction] = useState("Hello")
  return (
    <div>
    <div className="navbar">
        <div className="navdiv">
            <div className="logo">Welcome</div>
            <ul className='navElements'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    <div className='content'>
    <div className="rotating">
      <h1 onClick={() => {action==="Hello"?setAction("Hi"): setAction("Hello")}}>{action}</h1>
    </div>
    </div>

    </div>
  )
}

export default Home;
