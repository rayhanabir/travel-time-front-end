import React, { useState } from 'react';
import './Register.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
                <input className="form-control" onBlur={handleGetName} type="text" placeholder="your name"/>
                <input className="form-control" onBlur={handleGetEmail} type="email" placeholder='your email' required/>
                <input className="form-control" onBlur={handleGetPassword} type="password" placeholder="your password" required/>
                <input className="form-control"  type="password" placeholder="re-type your password"/>
                <input className="form-control" type="submit" value="Sign in" />
            </form>
            <h5>Already have an Account? <Link to='/login'>Login</Link></h5>

            <div>-------or--------</div>
             <button className="btn btn-danger" onClick={handleGoogleSIgnIn}>Google Sign in</button>
             </div>
        </div>
        </>
    );
};

export default Register;