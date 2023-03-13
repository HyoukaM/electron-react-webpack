import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import a from './assets/audio/t-rex-roar.mp3';

function Hello() {
  return (
    <div className="test">
      <audio src={a} controls loop muted>
        <source src={a} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
