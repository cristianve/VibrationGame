import ButtonAppBar from "./ButtonAppBar.js";
import ButtonPlay from "./ButtonPlay.js";
import ButtonScore from "./ButtonScore.js";
import Footer from "./Footer.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      </header>

      <Paper style={{ borderRadius: "25px" }} elevation={3}>
        <Grid
          container
          spacing={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <ButtonPlay />
          </Grid>
          <Grid item xs={12}>
            <ButtonScore />
          </Grid>
        </Grid>
        <Grid xs={12}>
          <h3 align="center">Orientation:</h3>
          <h4 align="center">X-axis (β):</h4>
          <h4 align="center">Y-axis (γ):</h4>
          <h4 align="center">Z-axis (α):</h4>
        </Grid>

        <Grid xs={12}>
          <h3 align="center">Accelerometer:</h3>
          <h4 align="center">X-axis:</h4>
          <h4 align="center">Y-axis:</h4>
          <h4 align="center">Z-axis:</h4>
        </Grid>


        <Grid xs={12}>
          <h3 align="center">Gyroscope</h3>
          <h4 align="center">X-axis:</h4>
          <h4 align="center">Y-axis:</h4>
          <h4 align="center">Z-axis:</h4>
        </Grid>
        <br/>
      </Paper>
      <br/>
      <Paper>
        <Footer />
      </Paper>
    </div>
  );
}

export default App;
