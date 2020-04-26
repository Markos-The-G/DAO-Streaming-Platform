import React, { Component } from 'react';
import "./modVid.css"
import Thumbnail from "../feed/thumbnail"
import picture from "../../assets/thumbnail.jpg"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import ipfs from '../../ipfs';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    accept: {
        background: "#5f9650",
        margin: "5px",
        color: "white",
        "&:hover": {
            background: "#335c28"
        }
    },
    report: {
        background: "#a82f2f",
        margin: "5px",
        color: "white",
        "&:hover": {
            background: "#701a1a"
        }
    },
}


class ModVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                violence: false,
                nudity: false,
                dangerous: false,
                hateful: false,
                harassment: false,
                spam: false,
                other: false,
                privacy: false
            },
            ipfsJson: null,
            bigDb: null
        }
    }

    onChange = (e) => {
        const field = e.target.name
        var data = this.state.data
        data[field] = !data[field]
        this.setState({ data: data })

    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.ipfsJson)
        const data = this.state.data;
        const title = this.props.title;
        const violence = 'violence';
        const nudity = 'nudity';
        const dangerous = 'dangerous';
        const hateful = 'hateful';
        const harassment = 'harassment';
        const spam = 'spam';
        const other = 'other';
        const privacy = 'privacy';

        const TF = [data, title, violence, nudity, dangerous, hateful, harassment, spam, other, privacy];

        let bigDb = {

        }

        ipfs.cat('QmRp9NTNQGgrNN86Lvn86rFCyidaEk1b2H95x2grjopqxz', (err, result) => {
            let obj = String.fromCharCode.apply(null, result);
            let new_obj = JSON.parse(obj);



            console.log(new_obj[title]['privacy']);
        })

        // ipfs.files.add()

        let obj = {

        }

        // obj[title] = this.state.data;
        // console.log("HELLO1")
        // let buffer = Buffer.from(JSON.stringify(obj));
        // console.log('buffer', buffer)
        // console.log(obj)

        // ipfs.files.add(buffer, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     }

        //     this.setState({
        //         ipfsJson: result[0].hash
        //     })

        //     console.log(this.state.ipfsJson);

        // })

        // editing the current database

        //PUT POST REQUEST HERE

    }

    render() {
        const { classes } = this.props;

        return (
            <div className="indv-mod-vid-div">
                <Thumbnail image={picture} />
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
                            <Button variant="contained" classes={{ root: classes.accept }} onClick={this.onSubmit}> No </Button>
                            <Button variant="contained" classes={{ root: classes.report }}> Yes </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ModVid);
