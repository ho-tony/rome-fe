// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Questionnaire from './components/Questionaire';
import DemoPage from './components/DemoPage';
import Header from './components/Header'; 



const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/demopage" element={<DemoPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
