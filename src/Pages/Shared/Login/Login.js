import React, { useState } from 'react';
import './Login.css';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons'




const Login = () => {
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('');

    const {user,setUser,  signInUsingGoogle, existingUserLogin, setIsLoading} = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from ||'/home';

    const handleGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result=>{
            setIsLoading(true)
            history.push(redirect_uri)
        })
        .catch(err =>{
            console.log(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const handleGetEmail = e =>{
        setEmail(e.target.value)
       
    }
    const handleGetPassword = e =>{
        setPassword(e.target.value)
        
    }

    const handleLogin = e =>{
        e.preventDefault()
        existingUserLogin(email, password)
        .then(result =>{
            setIsLoading(true)
            setUser(result.user)
            history.push(redirect_uri)
            
        })
        .catch(err =>{
            console.log(err.message);
        })
        .finally(()=>{
            setIsLoading(false)
        })

    }



    return (
        <>

        <div className="login-form">
           
          <div className="form-information">
            <form onSubmit={handleLogin}>
              
                <input className="form-control" onBlur={handleGetEmail} type="email" placeholder='Enter Your Email'/>
        
                
                <input className="form-control" onBlur={handleGetPassword} type="password" placeholder="Enter Your Password"/>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have an Account? <Link to='/register'>Sign Up</Link></p>

            
            <h3>OR</h3>
            <button className='google-btn' onClick={handleGoogleLogin}>
                <FontAwesomeIcon className='google-icon' icon={faGoogle}/> 
                Google Sign in</button>
          </div>

        </div>
           
        </>
    );
};

export default Login;