import React from "react";
import {Button, FormControl, FormGroup, Modal, ListGroupItem} from 'react-bootstrap';

class SearchItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return(
            <div className="searchitem-modal">
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

export default SearchItemModal;