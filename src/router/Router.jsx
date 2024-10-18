import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import TournamentPage from '../pages/TournamentPage';
import ShopPage from '../pages/ShopPage';

export default function Router() {
  return (
    <Routes>
      
      <Route path="/" element={<Dashboard />}>
        
        <Route path="dashboard/home" element={<HomePage />} />
        <Route path="dashboard/game" element={<GamePage />} />
        <Route path="dashboard/tournament" element={<TournamentPage />} />
        <Route path="dashboard/shop" element={<ShopPage />} />

      </Route>
    </Routes>
  );
}
