import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
import {ListGroupItem, Modal, Button, Popover, OverlayTrigger, Tooltip, Col, Image, Thumbnail} from 'react-bootstrap';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            showModal: false,
            modalInfo: {}
        }
    }
    
    openItemModal = (obj) => {
        this.setState({showModal: true, modalInfo: obj}, () => {
            // alert(JSON.stringify(this.state.modalInfo));
        });
    }

    handleModalShow = () => {
        this.setState({showModal: !this.state.showModal});
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
                openItemModal={this.openItemModal}
            />
            );
        }); // For the key, use the unique ID.
        const info = this.state.modalInfo;
        return (
            <div>
                <ListGroupItem style={{width: "50%",margin: "auto"}}>
                    {searchResults}
                </ListGroupItem>
                <Modal show={this.state.showModal} onHide={this.handleModalShow}>
                <Modal.Header closeButton>
                    <Modal.Title>{info.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Thumbnail src={info.imageURL} alt="200x200">
                        <h3>quantity: {info.quantity}</h3>
                        <h4>${info.price}</h4>
                        <Button bsStyle="primary" onClick={()=>alert("add ordering logic here!!!")}>Order</Button>
                        <Button bsStyle="default" onClick={this.handleModalShow}>Button</Button>
                    </Thumbnail>
                </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default SearchResult;