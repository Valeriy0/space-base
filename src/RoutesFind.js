import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Clicker } from './pages/clicker';
import { Boost } from './pages/clicker/boost';
import { Earn } from './pages/clicker/earn';
import { Profile } from './pages/clicker/profile';
import { Team } from './pages/clicker/team';
import { ClickerPresale } from './pages/presale/clicker';
import { MainPage } from './pages/main';
import { ProfilePage } from './pages/profile';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/clicker" element={<Clicker />} />
        <Route path="/clicker/boost" element={<Boost />} />
        <Route path="/clicker/team" element={<Team />} />
        <Route path="/clicker/earn" element={<Earn />} />
        <Route path="/clicker/profile" element={<Profile />} />
        <Route path="/presale" element={<ClickerPresale />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};
