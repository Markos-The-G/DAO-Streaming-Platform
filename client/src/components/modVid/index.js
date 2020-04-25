import React, { Component } from 'react';
import "./modVid.css"
import Thumbnail from "../feed/thumbnail"
import picture from "../../assets/thumbnail.jpg"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


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
    }
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
                threats : false,
                privacy : false
            }
        }
    }

    onChange = (e) => {
        const field = e.target.name
        var data = this.state.data
        data[field] = !data[field]
        this.setState({data : data})
        console.log(this.state.data)
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
                                />
                                Nudity
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="dangerous"
                                color="secondary"
                                />
                                Dangerous
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="hateful"
                                color="secondary"
                                />
                                Hateful
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="harassment"
                                color="secondary"
                                />
                                Harassment
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="spam"
                                color="secondary"
                                />
                                Spam
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="threats"
                                color="secondary"
                                />
                                Threats
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="privacy"
                                color="secondary"
                                />
                                Privacy
                            </div>  
                        </div>
                        <div>
                            <Button variant="contained" classes={{root : classes.accept}}> Accept </Button>
                            <Button variant="contained" classes={{root : classes.report}}> Report </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(ModVid);
