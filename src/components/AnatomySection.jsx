import React from 'react';
import '../App.css';

const indicators = [
     { label: 'Teeth', top: '12%', left: '76%', status: 'issue' },
//   { label: 'Healthy Heart', top: '22%', left: '28%', status: 'healthy' },
//   { label: 'Lungs', top: '33%', left: '32%', status: 'healthy' },
//   
{ label: 'Bone', top: '68%', left: '28%', status: 'healthy' },
];

const AnatomySection = () => {
  return (
    <section className="anatomy-section">
      <div className="anatomy-image-wrapper">
        <img
          src="https://i.pinimg.com/originals/14/70/3c/14703c8a5ef93d27cf80a45b549c552e.jpg"
          alt="Human Body"
          className="anatomy-image"
          
        />
        {indicators.map(({ label, top, left, status }) => (
          <div
            key={label}
            className={`indicator ${status}`}
            style={{ top, left }}
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnatomySection;
