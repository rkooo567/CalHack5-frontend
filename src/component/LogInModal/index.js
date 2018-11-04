import React, { Component } from 'react';
import {Button, FormControl, FormGroup Modal} from 'react-bootstrap';

class LoginModal extends Component {
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
                />
                <FormControl
                  type="text"
                  placeholder="password"
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
  }
}

export default LoginModal;
