/*image_url: "https://images-na.ssl-images-amazon.com/images/I/51Iy80mazWL._AC_US218_.jpg"
price: 34.64
quantity: 32
title: "[Sponsored]Tropicana Cranberry Juice, 32 oz Bottles, 12 Count"*/
import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import "./SearchResultItem.css";

class SearchResultItem extends React.Component {

  render() {
    const imageURL = this.props.imageURL;
    const price = this.props.price;
    const quantity = this.props.quantity;
    const title = this.props.title;
    const id = this.props.id;
    return (
<<<<<<< HEAD
        <ListGroupItem onClick={() => this.props.openItemModal({id, imageURL, price, quantity, title})}>
=======
        <ListGroupItem onClick={() => this.props.openItemModal({imageURL, price, quantity, title, id})}>
>>>>>>> ca06bb3... search page WIP
          <div className='video-item media'>
            <div className='media-left'>
              <img
                className='item-img'
                src={imageURL}
                alt="oops nothing"
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
}

export default SearchResultItem;