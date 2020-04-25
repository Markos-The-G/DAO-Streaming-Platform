import React from 'react'
import './Thumbnail.css';

function Thumbnail(props) {
  return (
    <div className="feed_video">
      <img href={props.image} className="video_thumbnail" />
      <h3 className="video_title">{props.title}</h3>
    </div>
  )
}

export default Thumbnail
