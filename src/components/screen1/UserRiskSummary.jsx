import React from 'react';
import Card from '../common/Card';
import { userRiskData } from '../../data/incidentData';

function UserRiskSummary() {
  return (
    <Card title="User Risk Summary">
      <div className="user-info">
        <div className="user-name">{userRiskData.name}</div>
        <div className="user-detail">{userRiskData.department}</div>
      </div>
      
      <div className="score-bar-container">
        <div className="score-bar-label">
          <span>Anomaly Score</span>
          <span>{userRiskData.anomalyScore}/100</span>
        </div>
        <div className="score-bar">
          <div 
            className="score-bar-fill" 
            style={{ width: `${userRiskData.anomalyScore}%` }}
          ></div>
        </div>
      </div>
      
      <div className="pattern-text">
        {userRiskData.pattern}
      </div>
    </Card>
  );
}

export default UserRiskSummary;