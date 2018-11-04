import React, { Component } from 'react';
import {path} from '../../globals';
import {Form, FormControl, Button, FormGroup} from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  onInputChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  search() {
    // get result from query
    fetch(path.search + this.state.query,{method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }})
      .then((res) => {
        // alert("cool"+"path"+path.search+this.state.query)
        return res.json();
      })
      .then((data) => {
        // alert("ahaha"+"path"+path.search+this.state.query)
        this.props.changeResult(data);
      })
      .catch(error => {alert("path"+path.search+this.state.query+error)})
    //changeResult(searchResult)
  }

  render() {
    return (
      <Form inline className='forminline' style={{marginLeft:"40%"}}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search product"
              value={this.state.query}
              // change the state query whenever the user types something
              onChange={(event) => this.onInputChange(event)}
              onKeyPress={
                event => {
                  if (event.key === 'Enter'){
                    event.preventDefault();
                    this.search();
                  }
                }
              }
            />
          </ FormGroup>
          <Button
            onClick={() => {this.search()}}
          >
            Search
          </Button>
      </Form>
    );
  }
};

export default SearchBar;