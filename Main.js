import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

//Load Navbar
import Navbar from "./component/Navbar";
//Load halaman
import Login from "./page/Login";

class Main extends Component {
  render = () => {
    return (
      <Switch>
      {/* Load component tiap halaman*/}
      <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
export default Main;
