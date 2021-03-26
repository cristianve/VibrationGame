import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Orders from "./components/Orders";
import ButtonPlay from "./components/ButtonPlay.js";
import Title from "./components/Title";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
});

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_running: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Paper style={{ borderRadius: "25px" }} elevation={3}>
          <Grid
            container
            spacing={4}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h1>Gestión de Vibration Game</h1>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            <Paper className={classes.paper}>
              <Title>Iniciar partida</Title>
              <Grid item xs={12}>
                <a
                  href="/admin"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonPlay />
                </a>
              </Grid>
            </Paper>
            <br/>
          </Grid>
        </Paper>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Admin);
