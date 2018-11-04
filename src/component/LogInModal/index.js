import React, { Component } from 'react';
import {Button, FormControl, FormGroup, Modal} from 'react-bootstrap';
import { getUser, setUser } from '../../globals';
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

  loginClicked(event) {
    setUser(this.state.login);
    history.push("/post")
  }

  render() {
    return (
        <div className="static-modal">
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
              <Button onClick={(e) => {this.loginClicked(e)}}>Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
  }
}

export default LoginModal;
