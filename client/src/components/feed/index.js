import React from "react";
import Thumbnail from "./thumbnail";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import picture1 from '../../assets/picture1.jpg'
import picture from '../../assets/thumbnail.jpg';




import picture2 from '../../assets/picture2.PNG'
import picture3 from '../../assets/picture3.PNG'
import picture4 from '../../assets/picture4.PNG'
import picture5 from '../../assets/picture5.PNG'
import picture6 from '../../assets/picture6.PNG'
import picture7 from '../../assets/picture7.PNG'
import picture8 from '../../assets/picture8.PNG'
import picture9 from '../../assets/picture9.PNG'
import picture10 from '../../assets/picture10.PNG'



const useStyles = makeStyles({
  root: {
    padding: "1em 0.5em",
    flexGrow: 1
  },
});

function Feed(props) {
  const classes = useStyles();
  console.log(picture1)
  console.log(picture)
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" spacing={2}>

        <Grid item>
          <Thumbnail image={picture} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture1} title="example video" channel="oi mate" />
        </Grid>

        < Grid item>
          <Thumbnail image={picture3} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture4} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture5} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture6} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture7} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail image={picture8} title="example video" channel="oi mate" />
        </Grid>
        <Grid item>
          <Thumbnail
            image={picture9}
            title="example video dsfsdfsdf  sdfsdfsd sdfsdf"
            channel="oi mate"
          />
        </Grid>
        <Grid item>
          <Thumbnail image={picture10} title="example video" channel="oi mate" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Feed;
