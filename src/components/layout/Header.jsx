import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemContext } from '../providers/ThemProviders';

const Header = () => {
    const {user, logout} = useContext(ThemContext)
 
    const handleLogout = () => {
        logout()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    return (
        <div>
                <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to="/orders">Orders</Link>
                {
                 user && <Link className="btn btn-ghost normal-case text-xl"  to="/profile">Profile</Link>
                 }
                <Link className="btn btn-ghost normal-case text-xl"  to="/register">Register</Link>
        
              {

                user ? <>
                  <span>{user.email}</span>
                  <button onClick={handleLogout} className="btn btn-xs">Sign out</button>
                </> : <Link to="/login">Login</Link>

              }
             </div>
        </div>
    );
};

export default Header;