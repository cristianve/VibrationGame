import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function LandingPage(props) {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h3>Your assigned nickname: </h3>{" "}
        <h1>
          {" "}
          {console.log("Props:" + props.randomName)}
          <b>{props.randomName}</b>
        </h1>
        <CircularProgress />
        <h3>
          <b>Waiting for the administrator to start the game!😁</b>
        </h3>
      </Grid>
    </React.Fragment>
  );
}
