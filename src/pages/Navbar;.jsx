import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">E-Commerce</Link>
        <div className="navbar-right">
          {user ? (
            <div className="user-info">
              <p className="user-email">Welcome, {user.email}</p>
              <button className="logout-button" onClick={handleLogout}>Sign Out</button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
