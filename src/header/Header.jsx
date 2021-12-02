import React from 'react';
import './header.css';
 const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <div className="headerTitleLg">Blog</div>
                <img className="headerImg" src="https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?" alt="mountain"/>
            </div>
        </div>
    )
}
export default Header;