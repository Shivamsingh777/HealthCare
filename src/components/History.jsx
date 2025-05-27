import React from 'react';
import '../App.css'; // Make sure App.css is imported in your main app or layout

function History() {
  const appointments = []; // Currently no history

  return (
    <div className="history-container">
      <h2>Appointment History</h2>

      {appointments.length === 0 ? (
        <div className="empty-history">
          <p>No past appointments yet.</p>
          <p>Once you complete a consultation, it will show up here.</p>
        </div>
      ) : (
        <ul className="appointment-list">
          {appointments.map((appt, index) => (
            <li key={index} className="appointment-item">
              <strong>{appt.patient}</strong> with Dr. {appt.doctor} on {appt.date}
              <br />
              Notes: {appt.notes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
