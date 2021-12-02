import React from 'react';
import './post.css';

 const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?" alt="post"/>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Web Mystery</span>
                </div>
                <span className="postTitle">Dark & Deep Web</span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati exercitationem pariatur aut necessitatibus. Laboriosam nostrum quae consectetur a praesentium facere, totam, corporis temporibus laborum architecto pariatur voluptates dolorem similique doloremque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati exercitationem pariatur aut necessitatibus. Laboriosam nostrum quae consectetur a praesentium facere, totam, corporis temporibus laborum architecto pariatur voluptates dolorem similique doloremque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati exercitationem pariatur aut necessitatibus. Laboriosam nostrum quae consectetur a praesentium facere, totam, corporis temporibus laborum architecto pariatur voluptates dolorem similique doloremque?
            </p>
        </div>
    )
}
export default Post;