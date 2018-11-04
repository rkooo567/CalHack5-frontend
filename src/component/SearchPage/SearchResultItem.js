/*image_url: "https://images-na.ssl-images-amazon.com/images/I/51Iy80mazWL._AC_US218_.jpg"
price: 34.64
quantity: 32
title: "[Sponsored]Tropicana Cranberry Juice, 32 oz Bottles, 12 Count"*/
import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import "./SearchResultItem.css";

const searchResultItem = (props) => {
  const imageURL = props.imageURL;
  const price = props.price;
  const quantity = props.quantity;
  const title = props.title;

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
            price: {price}
          </div>
           <div className='media-heading'>
            quantity: {quantity}
          </div>
           <div className='media-heading'>
            title: {title}
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default searchResultItem;