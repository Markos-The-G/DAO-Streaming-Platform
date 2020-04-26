import React from 'react'
import "./Tokens.css"
import ProfileWidget from "../../components/profileWidget"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    margin: "30px"
  },
  input: {
    color: "white"
  },
  TextField: {
    color: "grey"
  }
}

class Tokens extends React.Component{
  constructor(){
    super()
    this.state = {
      address : "",
      amount : 0,
      DTV : null
    }
  }

  onChange1 = (e) => {
    e.preventDefault()
    this.setState({address : e.target.value})
  }
  onChange2 = (e) => {
    e.preventDefault()
    this.setState({amount : e.target.value})
  } 

  submit = () => {
    console.log(this.state.address , this.state.amount)
    
    const add = this.state.address 
    document.getElementById("one").value = ""
    const amount = this.state.amount
    document.getElementById("two").value = ""

    // markos route goes here with add and amount 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"wallet": add ,"amount": parseInt(amount)});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3005/tokens/report", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        var raw = JSON.stringify({"wallet": this.props.wallet});

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
            this.setState({DTV : yourNumber})
          })
          .catch(error => console.log('error', error));
      })
      .catch(error => console.log('error', error));
    }
  render(){
    const { classes } = this.props; 

    return(
      <div className="tokens-div">
        <div className="tokens-form-div">
          <div className="text-fields">
            <div style={{fontSize : "25px", color : "white"}}>Donate:</div>
            <TextField className={classes.TextField} label="Address" id="one" color="secondary" className={classes.root}
            InputProps={{
              className: classes.input
            }}
            onChange={this.onChange1}
            />
            <TextField className={classes.TextField} label="Amount" id="two" color="secondary" className={classes.root}
            InputProps={{
              className: classes.input
            }}
            onChange={this.onChange2}
            />
            <Button variant="contained" onClick={this.submit}>Donate</Button>
          </div>
        </div>
        <div className="profile-tab-div">
            <ProfileWidget amount={this.state.DTV} wallet={this.props.wallet}></ProfileWidget>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Tokens);
