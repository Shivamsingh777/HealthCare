import React from 'react';
import '../App.css';

const ActivityFeed = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const generateBarData = () => {
    return days.map(() => ({
      primary: Math.floor(Math.random() * 50) + 10,
      secondary: Math.floor(Math.random() * 40) + 5,
      tertiary: Math.floor(Math.random() * 30)
    }));
  };

  const data = generateBarData();

  return (
    <div className="activity-container">
      <div className="activity-header">
        <div className="activity-title">Activity</div>
        <div className="activity-summary">3 Appointments on this week</div>
      </div>

      <div className="activity-graph">
        <div className="activity-bars">
          {days.map((day, index) => (
            <div key={index} className="activity-day">
              <div className="bar-group">
                <div
                  className="bar primary"
                  style={{ height: `${data[index].primary}%` }}
                ></div>
                <div
                  className="bar secondary"
                  style={{ height: `${data[index].secondary}%` }}
                ></div>
                <div
                  className="bar tertiary"
                  style={{ height: `${data[index].tertiary}%` }}
                ></div>
              </div>
              <div className="day-label">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
