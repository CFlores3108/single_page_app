// SelectedSong.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/SelectedSong.css';

// Aquí puedes definir tus canciones (podrías importarlas de otro archivo)
const songs = [
  { id: 1, title: 'Lloviendo Estrellas', artist: 'Cristian Castro', album: 'Grandes Hits', image: 'https://i.scdn.co/image/ab67616d0000b273e6d27eea95a12bc3dbaf4eaf' },
  { id: 2, title: 'Como me encanta', artist: 'Kevin Kaarl', album: 'Paris Texas', image: 'https://i.scdn.co/image/ab67616d0000b2730ee7e051b92d154d0c0bdf54' },
  { id: 3, title: 'Dancing In The Flames', artist: 'The Weeknd', album: 'Dancing In The Flames', image: 'https://i.scdn.co/image/ab67616d0000b273f0e9b93cadbeb4d0227a59eb' },
    { id: 4, title: 'Si Pudiera', artist: 'Manuel Medrano', album: 'Manuel Medrano', image: 'https://i.scdn.co/image/ab67616d0000b2738195fefecfd1ba1918971352' },
    { id: 5, title: 'Tópicos y tiempo', artist: 'Loreto Sesma', album: 'Tópicos y tiempo', image: 'https://i.scdn.co/image/ab67616d00001e02e3c5cdd2e6925bb7b9a4ed7e' },
    { id: 6, title: 'Bailame Despacio Vs La Player', artist: 'CLANDEYAFTER, Eme Sarav', album: 'Bailame Despacio Vs La Player', image: 'https://i.scdn.co/image/ab67616d0000b27307cee14104b44e1f28f27a3c' },
    { id: 7, title: 'Debate De 4', artist: 'Romeo Santos, Anthony Santos, Luis Vargas', album: 'Fórmula Vol. 1 (Deluxe Edition)', image: 'https://i.scdn.co/image/ab67616d0000b2731d6d3d544ca5b46453fafbb6' },
];

function SelectedSong() {
  const { id } = useParams(); // Obteniendo el ID de la URL
  const song = songs.find((s) => s.id === parseInt(id)); // Buscando la canción por ID en el arreglo

  if (!song) {
    return <p>Song not found</p>;
  }

  return (
    <div className="selected-song-selsong">
      <div className="album-cover-selsong">
        <img src={song.image} alt="Portada del álbum" />
      </div>
      <div className="song-details-container-selsong">
        <div className="song-info-selsong">
          <h1>{song.title}</h1>
          <p>{song.album}</p>
          <p>{song.title} - 1 canción</p>
        </div>
      </div>
    </div>
  );
}

export default SelectedSong;
