import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './App.css'
import History from './components/History';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Routes>
        <Route path='/' element={<DashboardMainContent />} />
        <Route path='/history' element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
