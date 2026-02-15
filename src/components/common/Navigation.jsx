import React from 'react';

function Navigation({ activeScreen, setActiveScreen }) {
  return (
    <div className="navigation">
      <button
        className={`nav-button ${activeScreen === 1 ? 'active' : ''}`}
        onClick={() => setActiveScreen(1)}
      >
        Real-Time Detection
      </button>
      <button
        className={`nav-button ${activeScreen === 2 ? 'active' : ''}`}
        onClick={() => setActiveScreen(2)}
      >
        Incident & Playbook
      </button>
    </div>
  );
}

export default Navigation;
