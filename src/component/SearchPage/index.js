import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class SearchPage extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <SearchResult />
        </div>
    );
  }
}

export default SearchPage;
