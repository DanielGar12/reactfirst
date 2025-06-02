import React, {useState} from 'react'
import './LoginSignup.css'
import user_icon from '../LoginSignup/circle-user.png'
import email_icon from '../LoginSignup/envelope.png'
import password_icon from '../LoginSignup/lock-hashtag.png'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  
  const [action,setAction] = useState("Sign Up");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home')
  }
  
    return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"? <div></div> : <div className="input">
                <img src={user_icon} alt="" />
                <input type='text' placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type='email' placeholder='Email' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type='password' placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"? <div></div>: <div className="forgot-password">Forgot Password? <span> Click Here! </span></div>}

        <div className="submit-container">
            <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{if (action === "Sign Up") handleSubmit();
               else setAction("Sign Up");}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {if (action === "Login") handleSubmit();
               else setAction("Login");}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup;
