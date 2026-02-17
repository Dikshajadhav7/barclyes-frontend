import React from 'react';

function PlaybookSummary({ incident }) {
  return (
    <>
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 className="card-title">Incident Summary</h2>
        <div className="info-row">
          <span className="info-label">Attack Type</span>
          <span className="info-value">{incident.attackType}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Asset</span>
          <span className="info-value">{incident.asset}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Department</span>
          <span className="info-value">{incident.department}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Initial Entry Method</span>
          <span className="info-value">{incident.entryMethod}</span>
        </div>
        <div className="info-row">
          <span className="info-label">First Detected</span>
          <span className="info-value">{incident.firstDetected}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Time to Containment</span>
          <span className="info-value">{incident.timeToContainment}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <h2 className="card-title">Attack Timeline</h2>
        <div className="timeline">
          {incident.timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PlaybookSummary;