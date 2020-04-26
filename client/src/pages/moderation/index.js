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
                    <ModVid title="asd"></ModVid>
                    <ModVid title="asdasd"></ModVid>
                    <ModVid title="Loom1"></ModVid>
                    <ModVid title="Loom2"></ModVid>
                    <ModVid title="Loom3"></ModVid>
                    <ModVid title="Loom4"></ModVid>

                </div>
                
            </div>
        );
    }
}
 
export default Moderation;