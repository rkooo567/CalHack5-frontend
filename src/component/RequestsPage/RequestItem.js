import React from 'react';

const RequestItem = (props) => {
  const imageURL = props.image;
  const name = props.name;
  const total_required = props.total_required;
  const upvote = props.upvote;

  return (
    <li onClick={() => alert("d")}>
      <div className='video-item media'>
        <div className='media-left'>
          <img
            className='media-object'
            src={imageURL}
            art='video-picture'
          />
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {name}
          </div>
           <div className='media-heading'>
            {total_required}
          </div>
           <div className='media-heading'>
            {upvote}
          </div>
        </div>
      </div>
    </li>
  );
}

export default RequestItem;