import React from 'react';
import '../App.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return ( 
   
  <div className='dashboard-overview'><div>
    <section className="dashboard-over">
      <h2 className='Dashboard'>Dashboard</h2>
    </section>
   <AnatomySection /> 
  </div>
   <HealthStatusCards />
  </div>
  );
};

export default DashboardOverview;
