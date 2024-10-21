import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LikedSongs.css';

const LikedSongs = () => {
  const songs = [
    { id: 1, title: 'Lloviendo Estrellas', artist: 'Cristian Castro', album: 'Grandes Hits', dateAdded: '4 days ago', duration: '4:16', image: 'https://i.scdn.co/image/ab67616d0000b273e6d27eea95a12bc3dbaf4eaf' },
    { id: 2, title: 'Como me encanta', artist: 'Kevin Kaarl', album: 'Paris Texas', dateAdded: '5 days ago', duration: '5:21', image: 'https://i.scdn.co/image/ab67616d0000b2730ee7e051b92d154d0c0bdf54' },
    { id: 3, title: 'Dancing In The Flames', artist: 'The Weeknd', album: 'Dancing In The Flames', dateAdded: '1 week ago', duration: '3:40', image: 'https://i.scdn.co/image/ab67616d0000b273f0e9b93cadbeb4d0227a59eb' },
    { id: 4, title: 'Si Pudiera', artist: 'Manuel Medrano', album: 'Manuel Medrano', dateAdded: '1 week ago', duration: '4:16', image: 'https://i.scdn.co/image/ab67616d0000b2738195fefecfd1ba1918971352' },
    { id: 5, title: 'Tópicos y tiempo', artist: 'Loreto Sesma', album: 'Tópicos y tiempo', dateAdded: '2 weeks ago', duration: '2:30', image: 'https://i.scdn.co/image/ab67616d00001e02e3c5cdd2e6925bb7b9a4ed7e' },
    { id: 6, title: 'Bailame Despacio Vs La Player', artist: 'CLANDEYAFTER, Eme Sarav', album: 'Bailame Despacio Vs La Player', dateAdded: '2 weeks ago', duration: '3:59', image: 'https://i.scdn.co/image/ab67616d0000b27307cee14104b44e1f28f27a3c' },
    { id: 7, title: 'Debate De 4', artist: 'Romeo Santos, Anthony Santos, Luis Vargas', album: 'Fórmula Vol. 1 (Deluxe Edition)', dateAdded: 'Sep 11, 2024', duration: '4:39', image: 'https://i.scdn.co/image/ab67616d0000b2731d6d3d544ca5b46453fafbb6' },
  ];

  return (
    <div className="liked-songs-container">
      <div className="header">
        <div className="icon-heart"></div>
        <div>
          <h1>Liked Songs</h1>
          <p>Carlos Flores . 7 songs</p>
          <button className="play-button">Play</button>
        </div>
      </div>
      <div className="song-list">
        <div className="song-list-header">
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Date added</span>
          <span>Duration</span>
        </div>
        {songs.map((song, index) => (
          <Link
          to={`/song/${song.id}`} // Cambiado para simplificar
          key={index}
          className="song-item"
        >
          <span>{song.id}</span>
          <div className="song-details">
            <img src={song.image} alt={song.title} className="song-image" />
            <div>
              <span>{song.title}</span>
              <br />
              <span className="artist-name">{song.artist}</span>
            </div>
          </div>
          <span>{song.album}</span>
          <span>{song.dateAdded}</span>
          <span>{song.duration}</span>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;
