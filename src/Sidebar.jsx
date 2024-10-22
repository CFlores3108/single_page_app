// Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaPodcast, FaHeart } from 'react-icons/fa';
import './styles/App.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLikedSongsClick = () => {
    navigate('/liked-songs');
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-item" onClick={handleLikedSongsClick}>
        <div className="icon"><FaHeart /></div>
        <span>Liked Songs</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><FaPodcast /></div>
        <span>Podcasts</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><FaMusic /></div>
        <span>Discover</span>
      </div>
    </div>
  );
};

export default Sidebar;
