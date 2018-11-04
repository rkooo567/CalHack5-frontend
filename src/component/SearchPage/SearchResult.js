import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
import {ListGroupItem} from 'react-bootstrap';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }
    
// List of search items
    render() {
        let i = 0;
        const searchResults = this.props.searchResult.map(
        (searchResult) => {
            return (
            <SearchResultItem
                imageURL={searchResult.imageURL}
                price={searchResult.price}
                quantity={searchResult.quantity}
                title={searchResult.title}
                key={i}
            />
            );
            i += 1;
        }); // For the key, use the unique ID.

        return (
        <ListGroupItem style={{width: "50%",margin: "auto"}}>
            {searchResults}
        </ListGroupItem>
        );
    }
}

export default SearchResult;