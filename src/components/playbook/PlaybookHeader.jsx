import React from 'react';
import barclaysLogo from '../../assets/images/barclays-logo.png';

function PlaybookHeader({ incident, onBack }) {
  return (
    <div className="playbook-header">
      <div className="playbook-header-left">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <img src={barclaysLogo} alt="Barclays" className="logo" />
        <div>
          <h1 className="page-title">Playbook for {incident.id}</h1>
          <span className="generated-badge">Generated from Historical Data</span>
        </div>
      </div>
    </div>
  );
}

export default PlaybookHeader;