import React, { Component } from 'react';
import ModVid from '../../components/modVid'
import ProfileWidget from "../../components/profileWidget"
import "./moderation.css"

class Moderation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="mod-div">
                <div className="profile-tab-div">
                    <ProfileWidget></ProfileWidget>
                </div>
                <div className="mod-vids-div">
                    <ModVid></ModVid>
                    <ModVid></ModVid>
                    <ModVid></ModVid>
                    <ModVid></ModVid>
                    <ModVid></ModVid>
                    <ModVid></ModVid>

                </div>
                
            </div>
        );
    }
}
 
export default Moderation;