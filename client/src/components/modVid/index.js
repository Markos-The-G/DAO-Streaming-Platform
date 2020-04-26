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
        }
    }

    onChange = (e) => {
        const field = e.target.name
        var data = this.state.data
        data[field] = !data[field]
        this.setState({ data: data })

    }

    onSubmitYes = (event) => {
        event.preventDefault();

        const title = this.props.title;

        if (this.state.ipfsJson === null) {

            let obj = {

            }

            obj[title] = {
                amount: 1,
                score: 1
            }

            let buffer = Buffer.from(JSON.stringify(obj));

            ipfs.files.add(buffer, (err, result) => {
                if (err) {
                    console.log(err)
                }

                this.setState({
                    ipfsJson: result[0].hash
                })

                console.log(this.state.ipfsJson)

            })

        } else {

            ipfs.cat(this.state.ipfsJson, (err, result) => {
                if (err) {
                    console.log(err)
                }
                let obj = String.fromCharCode.apply(null, result);
                let new_obj = JSON.parse(obj);
                // var x = JSON.parse(JSON.stringify(obj));
                console.log('newobj', new_obj);
                console.log(this.props.title);
                let currAmount = new_obj[this.props.title]["amount"];
                let currScore = new_obj[this.props.title]["score"];
                currAmount += 1;
                currScore += 1;

                let bBuffer = {
                    amount: currAmount,
                    score: currScore
                }

                new_obj[title] = bBuffer

                let buffer = Buffer.from(JSON.stringify(new_obj));

                ipfs.files.add(buffer, (err, result) => {
                    if (err) {
                        console.log(err);
                    }

                    this.setState({
                        ipfsJson: result[0].hash
                    })

                    console.log(this.state.ipfsJson)

                })


            })

        }

        // ipfs.cat('QmRp9NTNQGgrNN86Lvn86rFCyidaEk1b2H95x2grjopqxz', (err, result) => {
        //     let obj = String.fromCharCode.apply(null, result);
        //     let new_obj = JSON.parse(obj);

        //     let score = 0;
        //     let t = 0;
        //     let f = 0;
        //     TF.forEach((topic) => {
        //         if (new_obj[title][topic]) {
        //             t += 1;

        //         } else {
        //             f += 1;
        //         }
        //         console.log(new_obj[title][topic])
        //     })
        //     const score = t - f;
        //     console.log()

        // })

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


    onSubmitNo = (event) => {
        event.preventDefault();
        // console.log(this.state.ipfsJson)
        const data = this.state.data;
        const title = this.props.title;

        if (this.state.ipfsJson === null) {

            let obj = {

            }

            obj[title] = {
                amount: 1,
                score: -1
            }

            let buffer = Buffer.from(JSON.stringify(obj));

            ipfs.files.add(buffer, (err, result) => {
                if (err) {
                    console.log(err)
                }

                this.setState({
                    ipfsJson: result[0].hash
                })

                console.log(this.state.ipfsJson)

            })

        } else {

            ipfs.cat(this.state.ipfsJson, (err, result) => {
                if (err) {
                    console.log(err)
                }
                let obj = String.fromCharCode.apply(null, result);
                let new_obj = JSON.parse(obj);

                let currAmount = new_obj[title]["amount"];
                let currScore = new_obj[title]["score"];
                currAmount += 1;
                currScore -= 1;

                let bBuffer = {
                    amount: currAmount,
                    score: currScore
                }

                new_obj[title] = bBuffer;

                let buffer = Buffer.from(JSON.stringify(new_obj));

                ipfs.files.add(buffer, (err, result) => {
                    if (err) {
                        console.log(err);
                    }

                    this.setState({
                        ipfsJson: result[0].hash
                    })

                    console.log(this.state.ipfsJson)

                })


            })

        }

        // ipfs.cat('QmRp9NTNQGgrNN86Lvn86rFCyidaEk1b2H95x2grjopqxz', (err, result) => {
        //     let obj = String.fromCharCode.apply(null, result);
        //     let new_obj = JSON.parse(obj);

        //     let score = 0;
        //     let t = 0;
        //     let f = 0;
        //     TF.forEach((topic) => {
        //         if (new_obj[title][topic]) {
        //             t += 1;

        //         } else {
        //             f += 1;
        //         }
        //         console.log(new_obj[title][topic])
        //     })
        //     const score = t - f;
        //     console.log()

        // })

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

    quickcrap = (event) => {

        let obj = {
            "Times I Plaigarized": "https://ipfs.io/ipfs/QmNMYjg6zA4eTakhE6dBMRStWxUUHwuQt77CVuHAsDwXBy?filename=Times%20I%20Plagiarized.mp4",
            "Navy SEAL Jocko Willink Breaks Down Combat Scenes From Movies | GQ": "https://ipfs.io/ipfs/QmamFXGcLFpC7T1UNmASbWxgRM9E3qYQW8gWE6kSujbfVm?filename=Navy%20SEAL%20Jocko%20Willink%20Breaks%20Down%20Combat%20Scenes%20From%20Movies%20_%20GQ.mp4",
            "Coronavirus outbreak: Doug Ford gets choked up discussing his mother-in-laws COVID-19 case": "https://ipfs.io/ipfs/QmW5ywHqTFtnELNrQP8f8b21My4GgBdcaVa1MiXnLuRP8Y?filename=Doug%20Ford%27s%20mother-in-law%20tests%20positive%20for%20coronavirus.mp4"
        }

        let buffer = Buffer.from(JSON.stringify(obj));

        ipfs.files.add(buffer, (err, result) => {
            if (err) {
                console.log(err)
            }

            console.log(result[0].hash)

        })

    }

    render() {
        const { classes } = this.props;

        return (
            <div className="indv-mod-vid-div">
                <Thumbnail image={this.props.image} />
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
                            <Button variant="contained" classes={{ root: classes.accept }} onClick={this.onSubmitYes}> Yes </Button>
                            <Button variant="contained" classes={{ root: classes.report }} onClick={this.onSubmitNo}> No </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ModVid);
