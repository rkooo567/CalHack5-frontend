import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import PostItem from './PostItem';
import { Modal, Thumbnail, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import {getUser, path} from '../../globals'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            showModal: false,
            modalInfo: {},
            order_quantity: 0
        }

        fetch(path.posting)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({result: data})
            })
            .catch((err) => {
                console.error(err);
            })
    }

    openItemModal = (obj) => {
        this.setState({showModal: true, modalInfo: obj}, () => {
            // alert(JSON.stringify(this.state.modalInfo));
        });
    }

    handleModalShow = () => {
        this.setState({showModal: !this.state.showModal});
    }

    handleAddingQuantity = (e) => {
        this.setState({
            order_quantity: e.target.value,
        });
    }

    handleOrder = () => {
        const url = path.posting;
        const userData = {
            id: this.state.modalInfo.id,
            username: getUser(),
            quantity: this.state.order_quantity
        }
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
            body: userData
        })
    }
    
// List of search items
    render() {
        console.log(this.state.result)
        const postItems = this.state.result.map(
        (postItem, i) => {
            console.log(postItem)
            let my_quantity = 0;
            let total = 0;
            console.log(postItem.users_purchased)
            if (postItem.users_purchased != undefined && Object.keys(postItem.users_purchased).length != 0) {
                //if (postItem.users_purchased != 0) {
                    my_quantity = postItem.users_purchased[getUser()];
                //}
                let add = 0;
                console.log(Object.values(postItem.users_purchased))
                for(let val of Object.values(postItem.users_purchased)) {
                    add += val;
                }
                
                total = add / Object.keys(postItem.users_purchased).length
            }

            return (
            <PostItem
                openItemModal={this.openItemModal}
                imageURL={postItem.image_url}
                name={postItem.title}
                total_required={postItem.quantity}
                upvote={total}
                my_quantity={my_quantity}
                key={i}
            />
            );
        }); // For the key, use the unique ID.
        const info = this.state.modalInfo;
        return (
            <div>
                <ListGroupItem style={{width: "50%",margin: "auto"}}>
                    {postItems}
                </ListGroupItem>
                <Modal show={this.state.showModal} onHide={this.handleModalShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{info.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Thumbnail src={info.imageURL} alt="200x200">
                            <h3>name: {info.name}</h3>
                            <h4>quantity: {info.total_required}</h4>
                            <h4>my quantity: {info.my_quantity}</h4>
                            <h4>upvote/quantity: {info.upvote}/{info.total_required}</h4>
                            <form>
                                <FormGroup
                                controlId="formBasicText"
                                >
                                <ControlLabel>Type how many products you need</ControlLabel>
                                <FormControl
                                    type="number"
                                    placeholder="Enter quantity"
                                    onChange={this.handleAddingQuantity}
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </form>
                            <Button bsStyle="primary" onClick={this.handleOrder}>Order</Button>
                            <Button bsStyle="default" onClick={this.handleModalShow}>Button</Button>
                        </Thumbnail>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PostList;