import React from 'react';
import './singlePost.css';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Dark Web & Deep Web
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Mohammad Naim</b> </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
               <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam assumenda eligendi mollitia error, nobis blanditiis modi inventore harum natus repudiandae nemo rem soluta voluptates quibusdam odit sunt veritatis optio quo accusamus qui doloribus commodi a iusto. Consequatur quos tenetur consequuntur illo neque culpa omnis laudantium facilis iste, saepe quod rerum iusto error quo nobis! Iusto consectetur ipsam cum dicta nemo, eos vitae rem, nihil temporibus expedita odit amet nisi, veniam sit eum aliquam suscipit ducimus! Perspiciatis blanditiis quisquam distinctio asperiores, saepe laborum dicta labore, minima eligendi eum provident, nemo minus magni sint libero dolores! Cumque modi repellendus ducimus et!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam assumenda eligendi mollitia error, nobis blanditiis modi inventore harum natus repudiandae nemo rem soluta voluptates quibusdam odit sunt veritatis optio quo accusamus qui doloribus commodi a iusto. Consequatur quos tenetur consequuntur illo neque culpa omnis laudantium facilis iste, saepe quod rerum iusto error quo nobis! Iusto consectetur ipsam cum dicta nemo, eos vitae rem, nihil temporibus expedita odit amet nisi, veniam sit eum aliquam suscipit ducimus! Perspiciatis blanditiis quisquam distinctio asperiores, saepe laborum dicta labore, minima eligendi eum provident, nemo minus magni sint libero dolores! Cumque modi repellendus ducimus et!
               </p>
            </div>
        </div>
    )
}

export default SinglePost;