import React from 'react';
import '../App.css';

const UpcomingSchedule = () => {
  return (
    <div className="detailed-appointments">
      <h4>The Upcoming Appointments</h4>
    
      <div className="appointment"> 
        <span className='b'>On Wednesday</span>
        <div className='appointment1'>
        <div className="appointment-card">
          <h5>Health Checkup <span>(09:00 AM- 10:00 AM)</span></h5>
          <p>With: Dr. Mehta<i class="fa-solid fa-crutch" style={{ marginLeft: '115px' }} ></i></p>
        </div>
        <div className="appointment-card">
          <h5>Ophthalmologist <span>(11:00 AM- 12:00 PM)</span></h5>
          <p>With: Dr. Ahuja<i class="fa-solid fa-eye" style={{ marginLeft: '115px' }}></i></p>
        </div></div> <span className='b'>On Thursday</span>
        <div className='appointment1'>
           
        <div className="appointment-card">
          <h5>Cardiologist <span>(10:00 AM- 11:00 AM)</span></h5>
          <p>With: Dr. Kapoor<i class="fa-solid fa-heart" style={{ marginLeft: '115px' }}></i></p>
        </div>
        <div className="appointment-card">
          <h5>Neurologist <span>(12:00 PM- 01:00 PM)</span></h5>
          <p>With: Dr. Nandini Rao<i class="fa-solid fa-brain" style={{ marginLeft: '89px' }}></i></p>
        </div></div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
