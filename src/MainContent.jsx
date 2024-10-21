import React from 'react';
import './styles/App.css';

const MainContent = () => {
  const playlists = [
    { name: 'This is Kygo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXIugMpXP456jTiVfj9zDZbbTIfMnfzJNUg&s' },
    { name: 'New Music Friday', image: 'https://i.scdn.co/image/ab67706f0000000208d395fd79ccf6070972800f' },
    { name: 'Locked In', image: 'https://i.scdn.co/image/ab67706f000000028191333016e39147ac61b6d3' },
    { name: 'This is Logic', image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2F7UBi-default.jpg' },
    { name: 'All New Latin', image: 'https://i.scdn.co/image/ab67706f000000027392d11db0a0ff6df146b661' },
    { name: 'Sayonara', image: 'https://i.scdn.co/image/ab67616d0000b273af1e2e143561cf4df9941f5b' },
    { name: 'FERXXOCALIPSIS', image: 'https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242' },
  ];

  const topHits = [
    { name: 'Today Top Hits', image: 'https://i.scdn.co/image/ab67706f000000023cdf32d92f7cc96021e117d6' },
    { name: 'PRIMERA MUSA', image: 'https://i.scdn.co/image/ab67616d0000b273996764071dbd5240eefb2422' },
    { name: 'Moon Music', image: 'https://i.scdn.co/image/ab67616d00001e0209ba52a5116e0c3e8461f58b' },
    { name: 'Short n` Sweet', image: 'https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626' },
    { name: 'UTOPIA', image: 'https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44' },
    { name: 'After Hours', image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' },
    { name: 'Scorpion', image: 'https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5' },
  ];

  const jumpBackin = [
    { name: 'BAD', image: 'https://i.scdn.co/image/ab67616d0000b2731e2e5176d6d1076f24e2c860' },
    { name: 'Arrival', image: 'https://i.scdn.co/image/ab67616d0000b27370f7a1b35d5165c85b95a0e0' },
    { name: 'AUSTIN', image: 'https://i.scdn.co/image/ab67616d0000b27371cae34ad5a39bdab78af13e' },
    { name: 'Gorillaz', image: 'https://i.scdn.co/image/ab67616d0000b273c73a7bb15f43bae86215934b' },
    { name: 'Justice', image: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431' },
    { name: 'REFLEXA', image: 'https://i.scdn.co/image/ab67616d0000b2735313550303977c12f6db4b2f' },
    { name: 'This is a-ha', image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1jUpX2-default.jpg' },
  ];

  const recommended = [
    { name: 'Khalid', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6LuN9FCkKOj5PcnpouEgny/en-GB' },
    { name: 'Danny Ocean', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5H1nN1SzW0qNeUEZvuXjAj/en' },
    { name: 'Marshmello', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/64KEffDW9EtZ1y2vBYgq8T/es-419' },
    { name: 'Farruko', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2ynBIEaLMhbwQqrcfU7Jek/en' },
    { name: 'Coldplay', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4gzpq5DPGxSnKTe4SA8HAU/en' },
    { name: 'Tainy', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0GM7qgcRCORpGnfcN2tCiB/en' },
    { name: 'Rels B', image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2IMZYfNi21MGqxopj9fWx8/es-419' },
  ]
  

  ;

  return (
    <div className="main-content-container">
      <h2 className="section-title">Recently Playlist Played</h2>
      <div className="playlist-grid">
        {playlists.map((playlist, index) => (
          <div className="playlist-card" key={index}>
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <p className="playlist-name">{playlist.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Made For You</h2>
      <div className="playlist-grid">
        {topHits.map((hit, index) => (
          <div className="playlist-card" key={index}>
            <img src={hit.image} alt={hit.name} className="playlist-image" />
            <p className="playlist-name">{hit.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Jump back in</h2>
      <div className="playlist-grid">
        {jumpBackin.map((back, index) => (
          <div className="playlist-card" key={index}>
            <img src={back.image} alt={back.name} className="playlist-image" />
            <p className="playlist-name">{back.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Recommended Stations</h2>
      <div className="playlist-grid">
        {recommended.map((rec, index) => (
          <div className="playlist-card" key={index}>
            <img src={rec.image} alt={rec.name} className="playlist-image" />
            <p className="playlist-name">{rec.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
