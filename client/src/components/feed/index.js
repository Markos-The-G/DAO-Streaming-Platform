import React from 'react';
import Thumbnail from '../thumbnail';
import picture from "../../assets/thumbnail.jpg"

function Feed(props) {
  return (
    <div>
      <Thumbnail image={picture} title="example video" />
    </div>
  )
}

export default Feed;
