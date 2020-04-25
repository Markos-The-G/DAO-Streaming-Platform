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
            violence : true
        }
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
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="checkedB"
                                color="secondary"
                                />
                                Violence
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
