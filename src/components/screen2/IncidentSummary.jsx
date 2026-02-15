import React from 'react';
import Card from '../common/Card';
import { incidentInfo } from '../../data/incidentData';

function IncidentSummary() {
  return (
    <Card title="Incident Summary" className="incident-summary-card">
      <div className="info-row">
        <span className="info-label">Attack Type</span>
        <span className="info-value">{incidentInfo.attackType}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Primary Asset</span>
        <span className="info-value">{incidentInfo.primaryAsset}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Department</span>
        <span className="info-value">{incidentInfo.department}</span>
      </div>
      <div className="info-row">
        <span className="info-label">First Detected</span>
        <span className="info-value">{incidentInfo.firstDetected}</span>
      </div>
    </Card>
  );
}

export default IncidentSummary;