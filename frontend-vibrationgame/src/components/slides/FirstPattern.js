import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DownImage from "../../assets/Down.jpg";
export default function FirstPattern() {
  return (
    <React.Fragment>
  <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
        <Grid item xs={12}>
          <Paper>
            <img height="200" weight="200" src={DownImage} alt="Down Image" />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
