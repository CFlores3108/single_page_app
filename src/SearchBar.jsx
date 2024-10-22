import React, { useState } from 'react';
import './styles/SearchBar.css';
import { FaSearch, FaMicrophone, FaBell } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <div className="search-bar-wrapper">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png" alt="Logo" className="logo-icon" onClick={handleLogoClick}/>
      {!isSignUpPage && (
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to listen?"
            value={query}
            onChange={handleInputChange}
            className="search-input"
          />
          <FaMicrophone className="microphone-icon" />
        </div>
      )}
      <div className="actions-container">
        {!isSignUpPage && <FaBell className="notification-icon" />}
        {!isSignUpPage && <button className="sign-up-button" onClick={handleSignUpClick}>Sign Up</button>}
      </div>
    </div>
  );
};

export default SearchBar;
