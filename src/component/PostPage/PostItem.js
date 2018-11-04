import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import "./PostItem.css";

const PostItem = (props) => {
  const imageURL = props.imageURL;
  const name = props.name;
  const total_required = props.total_required;
  const upvote = props.upvote;

  return (
    <ListGroupItem onClick={() => alert("d")}>
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
            total_amount: {total_required}
          </div>
           <div className='media-heading'>
            ordered: {upvote}
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default PostItem;