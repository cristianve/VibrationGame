import React from "react";
import Header from "./components/Header.js";
import ButtonPlay from "./components/ButtonPlay.js";
import Footer from "./components/Footer.js";
import FragmentManager from "./components/slides/FragmentManager.js";
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

  handleAceleration(event) {
    this.updateFieldIfNotNull(
      "Accelerometer_gx",
      event.accelerationIncludingGravity.x,
      10
    );
    this.updateFieldIfNotNull(
      "Accelerometer_gy",
      event.accelerationIncludingGravity.y,
      10
    );
    this.updateFieldIfNotNull(
      "Accelerometer_gz",
      event.accelerationIncludingGravity.y,
      10
    );

    this.updateFieldIfNotNull("Accelerometer_x", event.acceleration.x, 10);
    this.updateFieldIfNotNull("Accelerometer_y", event.acceleration.y, 10);
    this.updateFieldIfNotNull("Accelerometer_z", event.acceleration.y, 10);

    this.updateFieldIfNotNull("Accelerometer_i", event.interval, 2);
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

      window.addEventListener(
        "devicemotion",
        (event) => {
          this.handleOrientation(event);
        },
        true
      );

      window.addEventListener(
        "devicemotion",
        (event) => {
          this.handleAceleration(event);
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
          <Header />
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

              <FragmentManager />
            </Grid>
          </Grid>
        </Paper>
        <br />
        <br />
        <Paper>
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

            <Grid item xs={4}>
              <h3>Accelerometer</h3>
              <ul>
                <h4>
                  <li>
                    X-axis: <span id="Accelerometer_x">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
                  </li>
                </h4>
                <h4>
                  <li>
                    Y-axis: <span id="Accelerometer_y">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
                  </li>
                </h4>
                <h4>
                  <li>
                    Z-axis: <span id="Accelerometer_z">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
                  </li>
                </h4>
                <h4>
                  <li>
                    Data Interval: <span id="Accelerometer_i">0</span>
                    <span> ms</span>
                  </li>
                </h4>
              </ul>
            </Grid>

            <Grid item>
              <h3>Accelerometer including gravity</h3>

              <ul>
                <h4>
                  <li>
                    X-axis: <span id="Accelerometer_gx">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
                  </li>
                </h4>

                <h4>
                  <li>
                    Y-axis: <span id="Accelerometer_gy">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
                  </li>
                </h4>

                <h4>
                  <li>
                    Z-axis: <span id="Accelerometer_gz">0</span>
                    <span>
                      {" "}
                      m/s<sup>2</sup>
                    </span>
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
