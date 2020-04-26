import React, { Component } from 'react';
import "./profileWidget.css"

class profileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount : 0
        }
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"wallet": this.props.wallet });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3005/tokens/balance", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result["_hex"])
            var yourNumber = parseInt(result["_hex"], 16)
            console.log(yourNumber)
            this.setState({amount : yourNumber})
          })
          .catch(error => console.log('error', error));
    }
    render() { 
        return (
            <div className="profile-widget-div">
                <div className="profile-balance">Current Balance: </div>
                <div className="balance-amount">
                    {this.props.amount ? this.props.amount : this.state.amount} DTV
                </div>
            </div>
          );
    }
}
 
export default profileWidget;