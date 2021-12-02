import React from 'react';
import Sidebar from '../../sidebar/Sidebar.jsx';
import './settings.css';

 const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfile">
                        <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?" alt="settingsProfile" className="settingsProfileImg" />
                        <label htmlFor="fileInput">
                             <i className="settingsProfileIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Mohammad Naim"/>
                    <label>Email</label>
                    <input type="email" placeholder="naim357@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="setttingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
export default Settings;