import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <div>
            <div className="nav-container">
                <div className="logo">
                    <h2>TRAVEL TIME</h2>
                </div>
                <div className="nav">
                    <Link to='/home'>Home</Link>
                    <Link to='/order'>MyOrder</Link>
                    <Link to='/manage'>ManageOrder</Link>
                    <Link to="/addPlaces">AddPlaces</Link>
                    {
                        user.email&& <span>{user.displayName}</span>
                    }
                  
                    {
                        user.email ?
                        <button onClick={logOut}>LogOut</button>
                        :<Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;