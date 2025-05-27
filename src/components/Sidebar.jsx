import React from 'react';
import '../App.css'
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  return (
   <aside className="sidebar">
        <div className="general">
          <div className="sidebar-general">General</div>

          <div className="menu-item">
            <i className="fa-solid fa-table-columns"></i>
            <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}><span>Dashboard</span></Link>
          </div>

          <div className="menu-item">
            <i className="fas fa-history"></i>
            <Link to='history' className={location.pathname === '/history' ? 'nav-link active' : 'nav-link'}><span>History</span></Link>
          </div>

          <div className="menu-item">
            <i className="fas fa-calendar"></i>
           <Link to='/Calendar'  className={location.pathname === '/Calendar' ? 'nav-link active' : 'nav-link'}> <span>Calendar</span></Link>
          </div>

          <div className="menu-item">
            <i className="fas fa-clock"></i>
             <Link to='/appointments'  className={location.pathname === '/appointment' ? 'nav-link active' : 'nav-link'}><span>Appointments</span></Link>
          </div>

          <div className="menu-item">
            <i className="fas fa-chart-bar"></i>
             <Link to='/statistics'  className={location.pathname === '/statistics' ? 'nav-link active' : 'nav-link'}><span>Statistics</span></Link>
          </div>
       

        <div className="general">
          <div className="sidebar-general">Tools</div>

          <div className="menu-item">
            <i className="fa-brands fa-rocketchat"></i>
             <Link to='/chat' className={location.pathname === '/chat' ? 'nav-link active' : 'nav-link'}><span>Chat</span></Link>
          </div>

          <div className="menu-item">
            <i className="fa-solid fa-phone"></i>
             <Link to='/support'  className={location.pathname === '/support' ? 'nav-link active' : 'nav-link'}><span>Support</span></Link>
          </div>
        </div>

        <div className="menu-item setting">
          <i className="fas fa-cog"></i>
           <Link to='/settings'  className={location.pathname === '/settings' ? 'nav-link active' : 'nav-link'}><span>Settings</span></Link>
        </div> </div>
      </aside>
  );
};

export default Sidebar;
