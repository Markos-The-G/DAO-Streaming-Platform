import React, { Component } from 'react';
import ModVid from '../../components/modVid'
import ProfileWidget from "../../components/profileWidget"
import "./moderation.css"

class Moderation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array : ["hi" , "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture1.PNG?alt=media&token=b2fe4445-a6f1-4431-b30f-057c34e9da11", "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture2.PNG?alt=media&token=7530984d-2669-41db-a4ec-5d06240ee93c", "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture3.PNG?alt=media&token=a5a04e81-be76-4b82-b247-72776204d62b", "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture4.PNG?alt=media&token=0c392eb0-b174-472b-bce6-065c6b5897ce", "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture4.PNG?alt=media&token=0c392eb0-b174-472b-bce6-065c6b5897ce" ,"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture5.PNG?alt=media&token=d166c69d-11a2-4daa-bc25-82b636984e82", "https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture6.PNG?alt=media&token=ba1ac335-e85a-4d29-b27c-7a96048184f6"],
            title : ["hi" ,"Pastry Chef Attempts to Make Gourmet Cadbury Creme Eggs", "Navy SEAL Jocko Willink Breaks Down Combat Scenes From Movies | GQ", "Fluffy Goes To India | Gabriel Iglesias", "Times I Plagiarized", "How Offshore Oil Rigs Work", "Want a Corgi? 7 things you don't know!", "Coronavirus outbreak: Doug Ford gets choked up discussing his mother-in-law's COVID-19 case", "Cute and Funny Cat Videos to Keep You Smiling! 🐱", "Revolution 1917 - WWI Documentaries", "How Dogs (Eventually) Became Our Best Friends"]
        }
    }
    
    delete = (e) => {
        console.log(e.num)
        var array = this.state.array
        var title = this.state.title

        if (array == []) {
            console.log("empty...")
        }

        array.splice(e.num, 1)
        title.splice(e.num, 1)

        this.setState({array : array, title : title})
    }

    render() {
        return (
            <div className="mod-div">
                <div className="profile-tab-div">
                    <ProfileWidget></ProfileWidget>
                </div>
                <div className="mod-vids-div">
                    {this.state.array.map((nigger, key) => {
                        return (<ModVid title={this.state.title[key]} image={nigger} id={`hi${key}`} num={key} delete={this.delete}></ModVid>)
                    })}
                    
                </div>

            </div>
        );
    }
}

export default Moderation;