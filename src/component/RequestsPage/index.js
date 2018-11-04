import React, { Component } from 'react';
import { getUser } from '../../globals';
import LoginModal from '../LoginModal/index';

class RequestsPage extends Component {
  render() {
    return (
      <div>Request Page {getUser()}</div>
    );
  }
}

export default RequestsPage;
