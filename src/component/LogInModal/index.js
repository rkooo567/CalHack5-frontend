import React, { Component } from 'react';
import {Button, FormControl, FormGroup, Modal} from 'react-bootstrap';
import { USER } from '../../globals';
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
    if (type == "login") {
      this.setState({login: event.target.value});
    } else {
      this.setState({pass: event.target.value});
    }
  }

  loginClicked(event) {
    
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
                <FormControl
                  type="text"
                  placeholder="Enter username"
                  onChange={(event) => this.onInputChange(event, "login")}
                  />
                <FormControl
                  type="text"
                  placeholder="password"
                  onChange={(event) => this.onInputChange(event, "pass")}
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={(e) => {this.loginClicked(e);}}>Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
  }
}

export default LoginModal;
