import React, { Component } from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from "../history";
import RequestsPage from "./RequestsPage/index";
import SearchPage from "./SearchPage/index";
import OrderPage from "./OrderPage/index";
import NavBar from "./NavBar/index";
import LoginModal from "./LoginModal/index";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/requests" component={RequestsPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/order" component={OrderPage} />
                    <Route path="/" component={LoginModal} />
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
