import React, { useState } from 'react';
import './Login.css';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('');

    const {user,setUser,  signInUsingGoogle, existingUserLogin} = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from ||'/home';

    const handleGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri)
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
            setUser(result.user)
            history.push(redirect_uri)
            
        })
        .catch(err =>{
            console.log(err.message);
        })

    }



    return (
        <>

        <div className="login-form">
           
          <div className="form-information">
            <form onSubmit={handleLogin}>
                <input className="form-control" onBlur={handleGetEmail} type="email" placeholder='your email'/>
                <input className="form-control" onBlur={handleGetPassword} type="password" placeholder="your password"/>
                <input type="submit" value="Login" />
            </form>
            <h5>Don't have an Account? <Link to='/register'>Sign Up</Link></h5>

            <div>-------or--------</div>
            <button className="btn btn-danger" onClick={handleGoogleLogin}>Google Sign in</button>
          </div>

        </div>
           
        </>
    );
};

export default Login;