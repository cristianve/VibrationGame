import ButtonAppBar from "./ButtonAppBar.js";
import ButtonPlay from "./ButtonPlay.js";
//import ButtonScore from "./ButtonScore.js";
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
          {/*
                  <Grid item xs={12}>
            <ButtonPlay />
          </Grid>
               */}

          <Grid item xs={12}>
            <a
              id="start_demo"
              class="btn btn-lg btn-success py-1"
              href="#"
              role="button"
            >
              <ButtonPlay />
            </a>
          </Grid>

          {/*
             <Grid item xs={12}>
            <ButtonScore />
          </Grid>
             */}
        </Grid>

        <Grid
          container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <h3>Orientation</h3>
            <ul>
              <h4>
                <li>
                  X-axis (&beta;): <span id="Orientation_b">0</span>
                  <span>&deg;</span>
                </li>
              </h4>
              <h4>
                <li>
                  Y-axis (&gamma;): <span id="Orientation_g">0</span>
                  <span>&deg;</span>
                </li>
              </h4>
              <h4>
                <li>
                  Z-axis (&alpha;): <span id="Orientation_a">0</span>
                  <span>&deg;</span>
                </li>
              </h4>
            </ul>
          </Grid>
        </Grid>
        <br />
      </Paper>
      <br />
      <Paper>
        <Footer />
      </Paper>
    </div>
  );
}

export default App;
