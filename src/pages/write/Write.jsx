import React from 'react';
import './write.css';

 const Write = () => {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?" alt="writeImg" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="fileIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="fileTitle" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="fileInput fileText" type="text" placeholder="Tell your story..."></textarea>
                </div>
                <button className="writeSubmit" onClick={(e) => e.preventDefault()}>Publish</button>
            </form>
        </div>
    )
}
export default Write;