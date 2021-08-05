import React from 'react';
import './videoIteam.css';

const VideoIteam = ({video,onVideoSelect}) => {
    const {thumbnails,description} = video.snippet;
    return(
            <div onClick={() =>onVideoSelect(video)} className="video-item item">
                <img className="ui small image" src={thumbnails.high.url} alt={description}  />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>
                   
    );
}

export default VideoIteam;