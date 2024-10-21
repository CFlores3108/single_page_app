import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import SearchBar from '../SearchBar';
import Footer from '../Footer';
import MainContent from '../MainContent';
import LikedSongs from '../LikedSongs';
import SelectedSong from '../SelectedSong';
import SignUp from '../SignUp';

const AppRoutes = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <>
      <SearchBar />
      <div className="content">
        {!isSignUpPage && <Sidebar />}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route path="/song/:id" element={<SelectedSong />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
      {!isSignUpPage && <Footer />}
    </>
  );
};

export default AppRoutes;
