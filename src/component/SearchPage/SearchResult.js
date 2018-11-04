import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
import {ListGroupItem, Modal, Button, Popover, OverlayTrigger, Tooltip, Col, Image, Thumbnail
, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {path, getUser} from '../../globals';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            showModal: false,
            modalInfo: {},
            order_quantity: 0,
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

    handleModalOrderButton = () => {
        const url = path.posting;
        const userData = {
            id: this.state.modalInfo.id,
            username: getUser(),
            quantity: this.state.order_quantity
        }
        console.log(userData);
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(userData)
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
    }

    handleOrderQuantityChange = (e) => {
        this.setState({
            order_quantity: e.target.value,
        });
    }

    // List of search items
    render() {
        console.log(typeof this.props.searchResult)
        const searchResults = this.props.searchResult.map(
        (searchResult,i) => {
            return (
            <SearchResultItem
                id={searchResult.id}
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
                        <form>
                            <FormGroup
                            controlId="formBasicText"
                            >
                            <ControlLabel>Type how many products you need</ControlLabel>
                            <FormControl
                                type="number"
                                placeholder="Enter quantity"
                                onChange={this.handleOrderQuantityChange}
                            />
                            <FormControl.Feedback />
                            </FormGroup>
                        </form>
                        <Button bsStyle="primary" onClick={this.handleModalOrderButton}>Order</Button>
                        <Button bsStyle="default" onClick={this.handleModalShow}>Cancel</Button>
                    </Thumbnail>
                </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default SearchResult;