import React, { Component } from 'react';
import ModVid from '../../components/modVid'
import ProfileWidget from "../../components/profileWidget"
import "./moderation.css"

class Moderation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mod-div">
                <div className="profile-tab-div">
                    <ProfileWidget></ProfileWidget>
                </div>
                <div className="mod-vids-div">
                    <ModVid title="asd" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture1.PNG?alt=media&token=b2fe4445-a6f1-4431-b30f-057c34e9da11"></ModVid>
                    <ModVid title="asdasd" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture2.PNG?alt=media&token=7530984d-2669-41db-a4ec-5d06240ee93c"></ModVid>
                    <ModVid title="Loom1" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture3.PNG?alt=media&token=a5a04e81-be76-4b82-b247-72776204d62b"></ModVid>
                    <ModVid title="Loom2" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture4.PNG?alt=media&token=0c392eb0-b174-472b-bce6-065c6b5897ce"></ModVid>
                    <ModVid title="Loom3" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture5.PNG?alt=media&token=d166c69d-11a2-4daa-bc25-82b636984e82"></ModVid>
                    <ModVid title="Loom4" image="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture6.PNG?alt=media&token=ba1ac335-e85a-4d29-b27c-7a96048184f6"></ModVid>

                </div>

            </div>
        );
    }
}

export default Moderation;