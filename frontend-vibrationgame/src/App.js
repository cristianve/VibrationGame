import React from "react";
import ButtonAppBar from "./ButtonAppBar.js";
import ButtonPlay from "./ButtonPlay.js";
//import ButtonScore from "./ButtonScore.js";
import Footer from "./Footer.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_running: false,
      demo_button: document.getElementById("start_demo"),
    };
  }

  updateFieldIfNotNull(fieldName, value, precision) {
    if (value != null) {
      document.getElementById(fieldName).innerHTML = value.toFixed(precision);
    }
  }

  handleOrientation(event) {
    this.updateFieldIfNotNull("Orientation_a", event.alpha, 10);
    this.updateFieldIfNotNull("Orientation_b", event.beta, 10);
    this.updateFieldIfNotNull("Orientation_g", event.gamma, 10);
  }

  updateSensors(e) {
    e.preventDefault();

    // Request permission for iOS 13+ devices
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }

    if (this.state.is_running) {
      window.removeEventListener("deviceorientation", (event) => {
        this.handleOrientation(event);
      });
      this.setState({ is_running: false });
    } else {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          this.handleOrientation(event);
        },
        true
      );
      this.setState({ is_running: true });
    }
  }

  render() {
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
              <a
                id="start_demo"
                href="#"
                style={{ textDecoration: "none" }}
                onClick={(e) => this.updateSensors(e)}
              >
                <ButtonPlay />
              </a>
            </Grid>
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
}

export default App;
