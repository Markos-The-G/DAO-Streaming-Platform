import React, { Component } from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import './Upload.css';

import ipfs from '../../ipfs.js';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipfsHash: null,
      ipfsJson: null,
      buffer: null,
      fileName: null,
      title: null,
      description: null,
    }
    this.fileInputRef = React.createRef();
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleDescriptionTitle(event) {
    this.setState({ description: event.target.value });
  }
  clearVideo = () => {
    this.setState({
      buffer: null,
      filename: null,
      title: null,
      description: null,
      bufferedVideo: null,
    });
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // updating state of the component
      this.setState({
        buffer: Buffer(reader.result)
      })
      console.log("buffer:", this.state.buffer)
    }
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ filename: event.target.value.split(/(\\|\/)/g).pop() });
  }

  onSubmit = (event) => {
    // no refresh today

    console.log("hi");

    event.preventDefault();
    console.log(this.state.ipfsHash)
    // getting the buffered file and uploading it to decentralized ipfs
    ipfs.files.add(this.state.buffer, (err, result) => {
      if (err) {
        console.log(err);
        return
      }
      this.setState({
        ipfsHash: result[0].hash
      })
      const nameVal = document.getElementById('name').value;
      if (this.state.ipfsJson === null) {

        let obj = {

        }

        obj[nameVal] = this.state.ipfsHash;
        // let buffer = Buffer.from(JSON.stringify(json));
        let buffer = Buffer.from(JSON.stringify(obj));
        console.log('Buffer: ', buffer);

        ipfs.files.add(buffer, (err, result) => {
          if (err) {
            console.log(err)
            return
          }
          this.setState({
            ipfsJson: result[0].hash
          })
          console.log("hi")
          console.log(this.state.ipfsJson);

          // markos route
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({ "hash": this.state.ipfsJson });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://localhost:3005/videos", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        })
      } else {
        ipfs.cat(this.state.ipfsJson, (err, result) => {
          if (err) {
            console.log(err);
            return
          }
          let obj = String.fromCharCode.apply(null, result);
          let new_obj = JSON.parse(obj);

          new_obj[nameVal] = this.state.ipfsHash;
          console.log(new_obj)


          let buffer = Buffer.from(JSON.stringify(new_obj));

          ipfs.files.add(buffer, (err, result) => {
            if (err) {
              console.log(err)
              return
            }

            this.setState({
              ipfsJson: result[0].hash
            })

            console.log(this.state.ipfsJson);

            // markos route
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "hash": this.state.ipfsJson });

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            fetch("http://localhost:3005/videos", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
          })
        })
      }
    })
  }

  render() {
    return (
      <div className="upload-page">
        <div className="container">
          {this.state.buffer == null ?
            <div className="drop-zone" onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
              <PublishIcon style={{ fontSize: '5rem' }} />
              <input
                ref={this.fileInputRef}
                className="FileInput"
                type="file"
                onChange={this.onFilesAdded}
                accept="video/mp4,video/x-m4v,video/*"
              />
              <span className="message">Upload Files</span>
            </div> :
            <form className="upload-form" onSubmit={this.onSubmit}>
              <h3>Details</h3>
              <div className="video-file">
                <div>Filename</div>
                <span>{this.state.filename}</span>
                <span className="clear-video-button" onClick={this.clearVideo}>Clear Video</span>
              </div>
              <div>
                <div className="upload-form-item">
                  <label for="email">Title</label>
                  <textarea id="email" rows="2" cols="50" value={this.state.title} onChange={this.handleTitleChange} name="title" type='text' />
                </div>
              </div>
              <div>
                <div className="upload-form-item">
                  <label for="description">Description</label>
                  <textarea id="description" rows="4" cols="50" value={this.state.description} onChange={this.handleDescriptionChange} name="description" type='text' />
                </div>
              </div>
              <hr noshade />
              <input disabled={this.state.title == null || this.state.description == null} onClick={this.onSubmit} value="Upload" className="upload-submit" type='submit' text='upload' />
            </form>



          }
        </div>
      </div>
    );
  }
}

/*
<form onSubmit={this.onSubmit}>
  <input type='file' onChange={this.onFilesAdded} />
  <input type='submit' />
  <input type='text' id='name' />
</form>
*/
export default Upload;