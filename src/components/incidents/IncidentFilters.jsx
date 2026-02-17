import React from 'react';

function IncidentFilters({ dateFilter, riskFilter, onDateChange, onRiskChange }) {
  return (
    <div className="filters-row">
      <div className="filter-group">
        <select
          className="filter-select"
          value={dateFilter}
          onChange={(e) => onDateChange(e.target.value)}
        >
          <option value="last24">Last 24 Hours</option>
          <option value="last7">Last 7 Days</option>
          <option value="last30">Last 30 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      <div className="filter-group">
        <select
          className="filter-select"
          value={riskFilter}
          onChange={(e) => onRiskChange(e.target.value)}
        >
          <option value="all">All Risk Levels</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}

export default IncidentFilters;