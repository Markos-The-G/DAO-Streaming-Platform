import React, { useState, useEffect } from "react";
import Thumbnail from "./thumbnail";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '2em',
  },
});

function Feed(props) {
  const classes = useStyles();
  const [hash, setHash] = useState();
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [test, setTest] = useState();

  useEffect(() => {
    var array = ["Times I Plaigarized", "Navy SEAL Jocko Willink Breaks Down Combat Scenes From Movies | GQ", "Coronavirus outbreak: Doug Ford gets choked up discussing his mother-in-laws COVID-19 case"]
    //var results = []
    array.forEach((title) => {
      var index = array.indexOf(title)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ "name": `${title}` });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3005/requestVideo", requestOptions)
        .then(response => response.text())
        .then(result => {
          //console.log(result)
          // Set result to state
          //results.push(result)
          // https://gateway.ipfs.io/ipfs/ + <hash>

          if (index == 0) {
            setOne(result)
          } else if (index == 1) {
            setTwo(result)
          } else if (index == 2) {
            setThree(result)
          } else {
            setHash("https://gateway.ipfs.io/ipfs/" + result)
          }
          console.log(result)
          console.log(hash)



        })
        .catch(error => console.log('error', error));
    });
    //console.log(results)
    // setOne(results[0])
    // setTwo(results[1])
    // setThree(results[2])
    // setTest(results[3])
    // console.log(results[0])
    // setHash("https://gateway.ipfs.io/ipfs/" + results[3])

  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" spacing={2}>
        {test ?
          <Grid item>
            <Thumbnail image={"https://huronelginwater.ca/wp-content/uploads/2019/03/test.jpg"} title="Test" channel="Hackathon" url={hash} />
          </Grid> : null}

        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture1.PNG?alt=media&token=b2fe4445-a6f1-4431-b30f-057c34e9da11"} title="Pastry Chef Attempts to Make Gourmet Cadbury Creme Eggs" channel="Bon Appetite" />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture2.PNG?alt=media&token=7530984d-2669-41db-a4ec-5d06240ee93c"} title="Navy SEAL Jocko Willink Breaks Down Combat Scenes From Movies | GQ" channel="GQ" url={two} />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture3.PNG?alt=media&token=a5a04e81-be76-4b82-b247-72776204d62b"} title="Fluffy Goes To India | Gabriel Iglesias" channel="Gabriel Iglesias" />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture4.PNG?alt=media&token=0c392eb0-b174-472b-bce6-065c6b5897ce"} title="Times I Plagiarized" channel="TheOdds1sOut" url={one} />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture5.PNG?alt=media&token=d166c69d-11a2-4daa-bc25-82b636984e82"} title="How Offshore Oil Rigs Work" channel="Wendover Productions" />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture6.PNG?alt=media&token=ba1ac335-e85a-4d29-b27c-7a96048184f6"} title="Want a Corgi? 7 things you don't know!" channel="KamuiCosplay" />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture7.PNG?alt=media&token=2bdce3de-f44e-4510-978f-68a27fc139aa"} title="Coronavirus outbreak: Doug Ford gets choked up discussing his mother-in-law's COVID-19 case" channel="Global News" url={three} />
        </Grid>
        <Grid item>
          <Thumbnail image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture8.PNG?alt=media&token=97cd2b1a-e035-4582-b53e-9e1042d7d79e"} title="Cute and Funny Cat Videos to Keep You Smiling! 🐱" channel="Rufus" />
        </Grid>
        <Grid item>
          <Thumbnail
            image={"https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture9.PNG?alt=media&token=99b91640-42c4-42bd-9ff0-32a61c4fa3c7"}
            title="Revolution 1917 - WWI Documentaries"
            channel="WWI Documentaries"
          />
        </Grid>
        <Grid item>
          <Thumbnail image={'https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/picture10.PNG?alt=media&token=ddd30614-0404-4e46-9f82-f8f5c55d3054'} title="How Dogs (Eventually) Became Our Best Friends" channel="PBS Eons" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Feed;
