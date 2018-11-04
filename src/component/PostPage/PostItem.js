import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import "./PostItem.css";

class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageURL = this.props.imageURL;
    const name = this.props.name;
    const total_required = this.props.total_required;
    const upvote = this.props.upvote;
    const my_quantity = this.props.my_quantity;

    return (
      <ListGroupItem onClick={() => this.props.openItemModal({imageURL, name, total_required, upvote})}>
        <div className='video-item media'>
          <div className='media-left'>
            <img
              className='item-img'
              src={imageURL}
            />
          </div>
          <div className='media-body'>
            <div className='media-heading'>
              name: {name}
            </div>
            <div className='media-heading'>
              my_quantity: {my_quantity}
            </div>            
            <div className='media-heading'>
              current/total: {upvote}/{total_required}
            </div>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

export default PostItem;