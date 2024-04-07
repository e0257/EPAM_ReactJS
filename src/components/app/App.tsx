import React from 'react';
import './App.scss';

import { HomePage } from '../pages/home-page';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}
