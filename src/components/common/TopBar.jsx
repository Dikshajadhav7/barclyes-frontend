import React from 'react';
import barclaysLogo from '../../assets/images/barclays-logo.png';
import StatusIndicator from './StatusIndicator';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <img src={barclaysLogo} alt="Barclays" className="logo" />
        <h1 className="title">AI Cyber Incident Response Platform</h1>
        <span className="badge">Offline Mode</span>
      </div>
      <StatusIndicator />
    </div>
  );
}

export default TopBar;