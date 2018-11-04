import React, { Component } from 'react';
import {Button, FieldGroup, Modal} from 'react-bootstrap';

class LoginModal extends Component {
  render() {
    return (
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form>
                <FieldGroup
                  id="username"
                  type="text"
                  label="username"
                  placeholder="Enter username"
                />
                <FieldGroup
                  id="password"
                  type="text"
                  label="password"
                  placeholder="password"
                />
              </form>
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
