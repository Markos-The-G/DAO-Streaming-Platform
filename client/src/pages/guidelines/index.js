import React, { Component } from 'react';
import "./guidelines.css"

import { withStyles , makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const styles = {
    container : {
        margin: "20px 0px 20px 0px",
        borderRadius : "4px",
        width: "100%",
        background : "#414141",
        color: "white",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    }

}






class Guidelines extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { classes } = this.props; 

        return (
            <div style={{width: "100%", height: "100%", display : "flex", flexDirection : "column", alignItems : "center"}}>
                <h1 style={{color : "white", marginTop : "40px"}}>
                    Community Guidelines
                </h1>
                <div className="guidelines-line"></div>
                <div className="guidelines-container">
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>
                    <div className="expansion-container">
                        <ExpansionPanel
                        className={classes.container}
                        >
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            classes={{root : classes.root, content : classes.content, expanded : classes.expanded}}
                            >
                            1. This is the first rule
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    </div>

                   
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Guidelines);
