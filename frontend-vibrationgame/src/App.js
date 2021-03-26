import Paper from "@material-ui/core/Paper";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Lottie from "react-lottie";
import lottieLoanding from "./assets/lotties/loanding.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Budy#3214",
    };
  }

  componentDidMount() {
    fetch("/api/getRandomName")
      .then((response) => response.json())
      .then((response) => this.setState({ name: response.name }));
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lottieLoanding,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    if (this.state.name === "") {
      return (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />;
        </div>
      );
    } else {
      return (
        <Router>
          <div>
            <header className="App-header">
              <Header />
            </header>
            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Main randomName={this.state.name} />
              </Route>
            </Switch>
            <Paper>
              <Footer />
            </Paper>
          </div>
        </Router>
      );
    }
  }
}

export default App;
