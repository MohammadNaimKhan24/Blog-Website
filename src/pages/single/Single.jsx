import React from 'react';
import Sidebar from '../../sidebar/Sidebar.jsx';
import SinglePost from '../../singlePost/SinglePost.jsx';
import './single.css';

 const Single = () => {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
export default Single;