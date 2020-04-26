import React from "react";
import "./Thumbnail.css";

function Thumbnail(props) {
  return (
    <div className="feed_video">
      <a href={props.url} target="_blank">
        <img src={props.image} className="video_thumbnail" />
      </a>
      <p className="video_title">{props.title}</p>
      <p className="channel_title">{props.channel}</p>
    </div>
  );
}

export default Thumbnail;
