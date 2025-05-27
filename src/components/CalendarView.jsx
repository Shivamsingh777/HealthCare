import React, { useState } from 'react';
import '../App.css';

const getNext7Days = (startDate) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push({
      day: date.toLocaleString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      fullDate: date.toISOString().split('T')[0],
    });
  }
  return days;
};
const appointments = {
  '2025-05-27': [
    { time: '11 AM -12 PM' },
    { time: '02 PM-03 PM' },
  ],
  '2025-05-28': [
     { time: '09 AM- 10 AM' },
     { time: '11 AM-12 PM' }
  ],
  '2025-05-29': [
    { time: '10 AM-11 AM' },
    { time: '12 PM-01 PM' },
  ],
};

const SevenDayCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleNext = () => {
    const nextStart = new Date(startDate);
    nextStart.setDate(startDate.getDate() + 7);
    setStartDate(nextStart);
  };

  const handlePrev = () => {
    const prevStart = new Date(startDate);
    prevStart.setDate(startDate.getDate() - 7);
    setStartDate(prevStart);
  };

  const weekDays = getNext7Days(startDate);

  return (
    <div className="seven-day-calendar">
      <div className="calendar-header">
        <h3>May 2025</h3>
        <div>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      <div className="calendar-grid-7">
        {weekDays.map((day, idx) => (
          <div key={idx} className="calendar-cell">
            <strong>{day.day}</strong>
            <div>{day.date}</div>
            {appointments[day.fullDate] && (
              <ul className="appointment-list">
                {appointments[day.fullDate].map((appt, i) => (
                  <li key={i}>
                    <div>{appt.time}</div>
                    <div>{appt.person}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* 👇 Static Detailed Appointments Below Calendar */}
      <div className="detailed-appointment">
        <div className='appointments'>
        <div className="appointment-card1">
          <h5>Dentist Appointment<span> (11:00 AM- 12:00 PM)</span></h5>
          <p>With: Dr. Emily <i className="fa-solid fa-tooth" style={{ marginLeft: '105px' }} ></i></p>
         
        </div>
        <div className="appointment-card2">
          <h5>Physiotherapy Session<span> (02:00 - 03:00 PM)</span></h5>
          <p>With: Dr. R.K Pandey<i class="fa-solid fa-bone" style={{marginLeft: 115}}></i></p>
          <p></p>
        </div></div>
      </div>
    </div>
  );
};

export default SevenDayCalendar;
