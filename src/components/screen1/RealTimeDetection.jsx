import React from 'react';
import TopBar from '../common/TopBar';
import CorrelationTable from './CorrelationTable';
import UserRiskSummary from './UserRiskSummary';
import RiskScoreCard from './RiskScoreCard';
import AlertBanner from './AlertBanner';

function RealTimeDetection() {
  return (
    <div>
      <TopBar />
      
      <div className="main-grid">
        <CorrelationTable />
        
        <div className="right-section">
          <UserRiskSummary />
          <RiskScoreCard />
        </div>
      </div>
      
      <AlertBanner />
    </div>
  );
}

export default RealTimeDetection;