import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import RealTimeDetection from './components/screen1/RealTimeDetection';
import IncidentPlaybook from './components/screen2/IncidentPlaybook';
import './App.css';

function App() {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="app-container">
      <Navigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      
      {activeScreen === 1 ? (
        <RealTimeDetection />
      ) : (
        <IncidentPlaybook />
      )}
    </div>
  );
}

export default App;