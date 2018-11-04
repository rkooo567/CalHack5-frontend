import React, { Component } from 'react';
import { USER } from '../../globals';
import LoginModal from '../LoginModal';

class RequestsPage extends Component {
  render() {
    if (USER.trim() === ""){
      return (
        <LoginModal />
      )
    }
    return (
      <div>Request Page</div>
    );
  }
}

export default RequestsPage;
