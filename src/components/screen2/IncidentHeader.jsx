import React from 'react';
import barclaysLogo from '../../assets/images/barclays-logo.png';
import { incidentInfo } from '../../data/incidentData';

function IncidentHeader() {
  return (
    <div className="incident-header">
      <div className="header-left">
        <img src={barclaysLogo} alt="Barclays" className="logo" />
        <h1 className="incident-id">{incidentInfo.id}</h1>
      </div>
      <div className="header-badges">
        <span className="status-badge">{incidentInfo.status}</span>
        <span className="classification-badge">{incidentInfo.classification}</span>
      </div>
    </div>
  );
}

export default IncidentHeader;