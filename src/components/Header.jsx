import React from 'react';
import '../App.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <span className="health">Health</span>care.
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
        />
          <div className="notification-icon" title="Notifications">🔔</div>
      </div>

      <div className="header-right">


        <div className="user-profile">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <h2 className='avatarName'>Shivam</h2>
                  <button className="add-btn" title="Add">+</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
