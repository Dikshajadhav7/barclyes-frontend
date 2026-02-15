import React from 'react';
import Card from '../common/Card';
import { timelineEvents } from '../../data/incidentData';

function AttackTimeline() {
  return (
    <Card title="Attack Timeline" className="timeline-card">
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-content">{event.content}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default AttackTimeline;