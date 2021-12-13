import React, { useState } from 'react';
import './Register.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const {setUser,  signInUsingGoogle, createNewUser, setIsLoading} = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from ||'/home';

    const handleGoogleSIgnIn = () =>{
        signInUsingGoogle()
        .then(result =>{
            setIsLoading(true)
            history.push(redirect_uri);
        })
        .catch(err=>{
            console.log(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })

    }
    
    
    const handleGetName = e =>{
        console.log(e.target.value);
    }
    const handleGetEmail = e =>{
        setEmail(e.target.value);
    }
    const handleGetPassword = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        e.preventDefault()
        createNewUser(email, password)
        .then(result =>{
            setIsLoading(true)
            setUser(result.user)
            history.push(redirect_uri)
        })
        .catch(err =>{
            console.log(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })

    }
    return (
        <>
           
           <div className="signIn-form">
                <div className="register-information">
            <form onSubmit={handleRegistration}>
                <input className="form-control" onBlur={handleGetName} type="text" placeholder="Enter Your Name"/>
                <input className="form-control" onBlur={handleGetEmail} type="email" placeholder='Enter Your Email' required/>
                <input className="form-control" onBlur={handleGetPassword} type="password" placeholder="Enter Your Password" required/>
                <input className="form-control"  type="password" placeholder="Re-type Your Password"/>
                <input className="form-control" type="submit" value="Sign in" />
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>

            <h3>OR</h3>
             <button className="google-btn" onClick={handleGoogleSIgnIn}>
                 <FontAwesomeIcon className='google-icon' icon={faGoogle}/>
                 Google Sign in</button>
             </div>
        </div>
        </>
    );
};

export default Register;