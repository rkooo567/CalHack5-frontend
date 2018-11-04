import React, { Component } from 'react';
import {Button, FormControl, FormGroup, Modal} from 'react-bootstrap';
import {getUser, setUser, host} from '../../globals';
import history from "../../history";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: ''
    }
  }

  onInputChange(event, type) {
    if (type === "login") {
      this.setState({login: event.target.value});
    } else {
      this.setState({pass: event.target.value});
    }
  }

  postData = (url = ``, data = {}) => {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }

  loginClicked = (event) => {
    this.postData(host+"/signup", {username: this.state.login})
    .then(data => {
      setUser(this.state.login);
      history.push("/post");
    }) // JSON-string from `response.json()` call
    .catch(error => alert("database login error"+error));
  }

  render() {
    return (
        <div className="login-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <h4>Username</h4>
                <FormControl
                  type="text"
                  placeholder="username here"
                  onChange={(event) => this.onInputChange(event, "login")}
                  />
                <h4>Password</h4>
                <FormControl
                  type="password"
                  placeholder="password here"
                  onChange={(event) => this.onInputChange(event, "pass")}
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(e) => this.loginClicked(e)} >Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
  }
}

export default LoginModal;
