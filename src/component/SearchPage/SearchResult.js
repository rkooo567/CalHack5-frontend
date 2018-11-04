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
    
    openItemModal = () => {
        
    }
// List of search items
    render() {
        const searchResults = this.props.searchResult.map(
        (searchResult,i) => {
            return (
            <SearchResultItem
                imageURL={searchResult.image_url}
                price={searchResult.price}
                quantity={searchResult.quantity}
                title={searchResult.title}
                key={i}
            />
            );
        }); // For the key, use the unique ID.

        return (
        <ListGroupItem style={{width: "50%",margin: "auto"}}>
            {searchResults}
        </ListGroupItem>
        );
    }
}

export default SearchResult;