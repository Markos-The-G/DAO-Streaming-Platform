import React, { Component } from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import './Upload.css';
import ipfs from './ipfs';
import ipfsmini from './ipfsmini';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ipfsHash: null,
      buffer: null,
      ipfsJson: null,
      hightlight: false,
      bufferedVideo: null,
      previewURL: null,
      title: null,
      description: null,
    }
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded = event => {
    const file = event.target.files[0]
    //store file
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        // updating state of the component
        this.setState({
            bufferedVideo: Buffer(reader.result)
        })
        console.log("buffer:", this.state.bufferedVideo)
    }
    //add preview
    reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        previewURL: reader.result
      })
    } 
    reader.readAsDataURL(file);
  }

  onUpload = () => {
    const video = this.state.uploadVideo;
    //insert code to upload video
  }



  captureFile = (event) => {
    // no refresh
    event.preventDefault();
    
    // gathering the file they uploaded
    const file = event.target.files[0]
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        // updating state of the component
        this.setState({
            buffer: Buffer(reader.result)
        })
        console.log("buffer:", this.state.buffer)

    }

  }
  
  

  onSubmit = (event) => {
    // no refresh today
    event.preventDefault();

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

                console.log(this.state.ipfsJson);

            })

        } else {

            ipfs.cat('QmXtr9eMLEpKYYs9W6Fkag6we2WaMhLuZuwLCKpMbiVrLa', (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                let obj = String.fromCharCode.apply(null, result);
                let new_obj = JSON.parse(obj);

                new_obj[nameVal] = this.state.ipfsHash;

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
                })

            });

        }

        // console.log(this.state.ipfsJson);
    })
    // getting the name of the video
  }



  render() {
    return (
      <div className="upload-page">
        <div className="container">
          {true ? 
          <div className="drop-zone" onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
            <PublishIcon style={{ fontSize: '5rem' }}/>
            <input
              ref={this.fileInputRef}
              className="FileInput"
              type="file"
              onChange={this.onFilesAdded}
              accept="video/mp4,video/x-m4v,video/*"
            />
            <span className="message">Upload Files</span>
          </div>  
          :
          <form>
            <h3></h3>
            <video width="400" controls>
              <source src={this.state.previewURL} />
              Your browser does not support HTML5 video.
            </video>
            <input name="title" type='text'/>
            <input name="description" type='text'/>
            <input type='submit'/>
          </form>
          }
        </div>



        <form onSubmit = {this.onSubmit}> 
          <input type='file' onChange={this.captureFile} />
          <input type='submit' />
          <input type='text' id='name' />
        </form>
      </div>
    );

  }
}

export default Upload;  