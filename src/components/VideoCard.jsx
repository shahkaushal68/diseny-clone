import React from "react";

const VideoCard = () => {
  return (
    <div className="video-card-container">
      <div className="video-card">
        <img src="images/disney.PNG" className="video-card-image" alt="" />
      </div>
      <div className="video-card">
        <img src="images/pixar.PNG" className="video-card-image" alt="" />
      </div>
      <div className="video-card">
        <img src="images/marvel.PNG" className="video-card-image" alt="" />
      </div>
      <div className="video-card">
        <img src="images/star-wars.PNG" className="video-card-image" alt="" />
      </div>
      <div className="video-card">
        <img src="images/geographic.PNG" className="video-card-image" alt="" />
      </div>
    </div>
  );
};

export default VideoCard;
