import React from "react";

const HealthStatusCards = () => {
  const healthData = [
    { id: 1, name: "Lungs", date: "2022-01-01", percent: 90 },
    { id: 2, name: "Teeth", date: "2022-01-15", percent: 45 },  // red
    { id: 3, name: "Bone", date: "2022-02-01", percent: 75 },
  ];

  return (
    <div className="health-status-cards">
      <span className="week">This week <i
  className="fa-solid fa-chevron-down"
  style={{ marginTop: '5px', display: 'inline-block' }}
></i></span>
      {healthData.map(({ id, name, date, percent }) => {
        const barColor = percent < 60 ? "#e74c3c" /* red */ : "#4caf50" /* green */;
        return (
          <div key={id} className="health-status-card">
            <div className="first">
              <span>{name}</span>
            </div>
            <span>{date}</span>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${percent}%`, backgroundColor: barColor }}
                title={`${percent}% Healthy`}
              ></div>
            </div>
            <span className="percent-label">{percent}% Healthy</span>
          </div>
        );
      })}
      <span className="details">Details<i class="fa-solid fa-arrow-right" style={{ marginTop: '5px', display: 'inline-block' }}></i></span>
    </div>
  );
};

export default HealthStatusCards;
