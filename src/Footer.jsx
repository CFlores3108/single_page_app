// Footer.jsx
import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="now-playing">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Firestone_Single.jpg" alt="Album Art" className="album-art" />
        <div>
          <p className="song-title">Firestone</p>
          <p className="artist-name-footer">Kygo, Conrad Sewell</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-button"><FaStepBackward /></button>
        <button className="control-button"><FaPlay /></button>
        <button className="control-button"><FaStepForward /></button>
        
      </div>
      <div className="volume-control">
        <button className="control-button"><FaVolumeDown /></button>
        <input type="range" min="0" max="100" className="volume-slider" />
        <button className="control-button"><FaVolumeUp /></button>
      </div>
    </div>
  );
};

export default Footer;
