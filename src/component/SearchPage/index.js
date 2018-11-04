import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
    }
  }

  changeResult(resultList) {
    this.setState({
      searchResult: resultList
    })
  }

  render() {
    return (
        <div>
            <SearchBar changeResult={this.changeResult}/>
            <SearchResult searchResult={this.state.searchResult}/>
        </div>
    );
  }
}

export default SearchPage;
