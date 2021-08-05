import React from 'react';
import VideoIteam from './videoIteam';

const VideoList = ({videoes,onVideoSelect}) => {
    
    const Iteams = videoes.map((video)=>{
        return <VideoIteam key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    })
    
     return(
         <div className="ui relaxed divided selection list ">
                {Iteams}
         </div>
     );
}

export default VideoList;