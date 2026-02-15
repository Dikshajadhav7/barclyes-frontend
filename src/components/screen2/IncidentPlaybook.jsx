import React from 'react';
import IncidentHeader from './IncidentHeader';
import IncidentSummary from './IncidentSummary';
import AttackTimeline from './AttackTimeline';
import AIRecommendedActions from './AIRecommendedActions';
import ExecutiveRiskAssessment from './ExecutiveRiskAssessment';

function IncidentPlaybook() {
  return (
    <div>
      <IncidentHeader />
      
      <div className="two-column">
        <div>
          <IncidentSummary />
          <AttackTimeline />
        </div>
        
        <div>
          <AIRecommendedActions />
          <ExecutiveRiskAssessment />
        </div>
      </div>
    </div>
  );
}

export default IncidentPlaybook;