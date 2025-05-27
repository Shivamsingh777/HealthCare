import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../App.css'

const DashboardMainContent = () => {
  return (
   <div className='dashboard-main'> 
   <div className="dashboard-main-content">
      <DashboardOverview />
      <ActivityFeed />
      </div>
       <div className='dashboard2'>
      <CalendarView />
      <UpcomingSchedule />
     </div>
    </div>
  );
};

export default DashboardMainContent;
