import React, { Component } from 'react';
import "./modVid.css"
import Thumbnail from "../feed/thumbnail"
import picture from "../../assets/thumbnail.jpg"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import ipfs from './ipfs';
import ipfsmini from './ipfsmini';

const styles = {
    accept : {
        background : "#5f9650",
        margin : "5px",
        color : "white",
        "&:hover": {
            background: "#335c28"
        }
    },
    report : {
        background: "#a82f2f",
        margin : "5px",
        color : "white",
        "&:hover" : {
            background : "#701a1a"
        }
    },
}


class ModVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : { 
                violence : false,
                nudity : false,
                dangerous : false,
                hateful : false,
                harassment : false,
                spam : false,
                other : false,
                privacy : false
            },
            buffer: null,
            ipfsJson: null,
            numload: false
        }
    }

    onChange = (e) => {
        const field = e.target.name
        var data = this.state.data
        data[field] = !data[field]
        this.setState({data : data})
        // // console.log(this.state.data)
        // let obj = {

        // }
        // let titleName = this.props.title;
        // obj[titleName] = this.state.data;
        // let buffer = Buffer.from(JSON.stringify(obj));

        // this.setState({
        //     buffer: buffer
        // })

    }

    onSubmit = (event) => { 

        // if (this.state.ipfsJson === null) {
        //     const projectName = this.props.title;
        //     let obj = {

        //     }
        //     console.log("test")

        //     obj[projectName] = this.state.data;
        //     console.log(obj)
        //     let buffer = Buffer.from(JSON.stringify(obj));
        //     console.log(buffer);

        //     ipfs.files.add(buffer, (err, results) => {
        //         if (err) {
        //             console.log(err)
        //         }
        //         console.log(results[0].hash)
        //     })

        // } else {
        //     console.log("else works?")
        //     const url = "https://gateway.ipfs.io/ipfs/" + currentLink;
            
        //     ipfs.cat(url, (err, result) => {
        //         if (err) {
        //             console.log(err)
        //             return
        //         }
        //         console.log(result);
        //         let obj = String.fromCharCode.apply(null, result);
        //         console.log(obj);
        //         let new_obj = JSON.parse(obj);
        //         // console.log(new_obj)
        //         const projectName = this.props.title;
        //         new_obj[projectName] = this.state.data;

        //         let buffer = Buffer.from(JSON.stringify(new_obj));

        //         ipfs.files.add(buffer, (err, result) => {
        //             if (err) {
        //                 console.log(err)
        //                 return
        //             }

        //             this.setState({
        //                 ipfsJson: result[0].hash
        //             })

        //             console.log(this.state.ipfsJson)

        //             // markos route
        //             var myHeaders = new Headers();
        //             myHeaders.append("Content-Type", "application/json");

        //             // var raw = JSON.stringify({"hash": this.state.ipfsJson});

        //             // var requestOptions = {
        //             //   method: 'POST',
        //             //   headers: myHeaders,
        //             //   body: raw,
        //             //   redirect: 'follow'
        //             // };

        //             // fetch("http://localhost:3005/ballot", requestOptions)
        //             //   .then(response => response.text())
        //             //   .then(result => console.log(result))
        //             //   .catch(error => console.log('error', error));

        //         })

        //     })

        // }

        //PUT POST REQUEST HERE
    }

    render() { 
        const { classes } = this.props; 

        return (
            <div className="indv-mod-vid-div">
                <Thumbnail image={picture}/>
                <div className="mod-vid-form-div">
                    <div className="mod-vid-form">
                        <div className="checkbox-container">
                            <div className="checkbox-div">
                                <Checkbox
                                name="violence"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.violence}
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="nudity"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.nudity}
                                />
                                Nudity
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="dangerous"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.dangerous}
                                />
                                Dangerous
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="hateful"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.hateful}
                                />
                                Hateful
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="harassment"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.harassment}
                                />
                                Harassment
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="spam"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.spam}
                                />
                                Spam
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="privacy"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.privacy}
                                />
                                Privacy
                            </div>  
                            <div className="checkbox-div">
                                <Checkbox
                                name="privacy"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.privacy}
                                />
                                Other
                            </div>  
                        </div>
                        <div>
                            <Button variant="contained" classes={{root : classes.accept}} onClick={this.onSubmit}> No </Button>
                            <Button variant="contained" classes={{root : classes.report}} onClick={this.onSubmit}> Yes </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(ModVid);
