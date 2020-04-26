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
  }
}

class Tokens extends React.Component{
  constructor(){
    super()
    this.state = {
      address : "",
      amount : 0
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

  }
  render(){
    const { classes } = this.props; 

    return(
      <div className="tokens-div">
        <div className="tokens-form-div">
          <div className="text-fields">
            <div style={{fontSize : "25px", color : "white"}}>Donate:</div>
            <TextField label="Address" id="one" color="secondary" className={classes.root}
            InputProps={{
              className: classes.input
            }}
            onChange={this.onChange1}
            />
            <TextField label="Amount" id="two" color="secondary" className={classes.root}
            InputProps={{
              className: classes.input
            }}
            onChange={this.onChange2}
            />
            <Button variant="contained" onClick={this.submit}>Donate</Button>
          </div>
        </div>
        <div className="profile-tab-div">
            <ProfileWidget></ProfileWidget>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Tokens);
