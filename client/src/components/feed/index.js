import React from "react";
import Thumbnail from "./thumbnail";
import picture from "../../assets/thumbnail.jpg";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1em 0.5em",
    flexGrow: 1
    },
});

function Feed(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" spacing={2}>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail
            image={picture}
            title="example video dsfsdfsdf  sdfsdfsd sdfsdf"
            channel="oi mate"
          />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Feed;
