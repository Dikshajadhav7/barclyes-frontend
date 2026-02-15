import React from 'react';
import Card from '../common/Card';
import { correlationEvents } from '../../data/incidentData';

function CorrelationTable() {
  const getRiskBadgeClass = (risk) => {
    return `risk-badge risk-${risk}`;
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card title="Real-Time Correlation (10 min window)">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>User</th>
              <th>Host</th>
              <th>Event</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {correlationEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.time}</td>
                <td>{event.user}</td>
                <td>{event.host}</td>
                <td>{event.event}</td>
                <td>
                  <span className={getRiskBadgeClass(event.risk)}>
                    {capitalizeFirst(event.risk)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CorrelationTable;