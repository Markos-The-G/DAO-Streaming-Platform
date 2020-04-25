import React, { Component } from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import './Upload.css';
import ipfs from './ipfs';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        ipfsHash: null,
        hightlight: false,
        uploadVideo: null,
        buffer: null
    }
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded = event => {
    var reader = new FileReader();
    reader.onload = function(event) {
      this.setState({uploadVideo: event.target.result});
      const file = null // remembe rot chagne this
      reader.readAsDataURL(file);
    } 
  }

  onUpload = () => {
    const video = this.state.uploadVideo;
    //insert code to upload video
  }

  captureFile = (event) => {
    event.preventDefault();
    
    const file = event.target.files[0]
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        this.setState({
            buffer: Buffer(reader.result)
        })
        console.log("buffer:", this.state.buffer)

    }

  }

  onSubmit = (event) => {
    event.preventDefault();
    ipfs.files.add(this.state.buffer, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        this.setState({
            ipfsHash: result[0].hash
        })
        console.log('ipfs:', this.state.ipfsHash)
    })

  }


  render() {
    return (
      <div className="upload">
        <div className="drop-zone" onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
          { this.state.uploadVideo != null ? 
            <video width="400" controls>
              <source src={this.state.uploadVideo} />
              Your browser does not support HTML5 video.
            </video>
          : 
          <div>
            <PublishIcon/>
            <input
              ref={this.fileInputRef}
              className="FileInput"
              type="file"
              onChange={this.onFilesAdded}
              accept="video/mp4,video/x-m4v,video/*"
            />
            <span>Upload Files</span>
          </div>  

          
        }
        </div>

        <form onSubmit = {this.onSubmit}> 
          <input type='file' onChange={this.captureFile} />
          <input type='submit' />
        </form>

      </div>
    );

  }
}

export default Upload;  