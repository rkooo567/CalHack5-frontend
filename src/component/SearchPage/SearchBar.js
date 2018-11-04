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
    const changeResult = this.props.changeResult;
    // get result from query
    fetch(path.search + this.state.query)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(error => {console.error("error occured")})
    //changeResult(searchResult)
  }

  render() {
    const changeResult = this.props.changeResult;
    return (
      <Form inline>
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
                    this.search()
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