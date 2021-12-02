import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://themes.themegoods.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="about me" />
        <p className="small-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia perspiciatis nisi optio quaerat enim, ut numquam ipsum explicabo qui voluptates minima voluptate, sunt, error assumenda aut quod neque odit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com" target="_blank">
            <i class="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i class="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i class="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank">
            <i class="sidebarIcon fab fa-pinterest-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
