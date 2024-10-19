import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import TournamentPage from '../pages/TournamentPage';
import ShopPage from '../pages/ShopPage';
import TournamentDetails from '../components/common/TournamentDetails';

export default function Router() {
  return (
    <Routes>
      
      <Route path="/" element={<Dashboard />}>
        
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard/game" element={<GamePage />} />
        <Route path="dashboard/tournament" element={<TournamentPage />} />
        <Route path="dashboard/shop" element={<ShopPage />} />
        <Route path="dashboard/tournamentdetails/:tournamentid" element={<TournamentDetails/>} />


      </Route>
    </Routes>
  );
}
