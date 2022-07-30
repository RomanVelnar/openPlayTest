import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Activity from './pages/activities/Activity';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/activity" element={<Activity />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
