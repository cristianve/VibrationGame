import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Left from "../../assets/Left.jpg";
export default function LastPattern() {
  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper>
            <img height="200" weight="200" src={Left} alt="Down Image" />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
