import React, { Component } from 'react';

class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }

getHardCodedResult() {
    let appleImage = "https://cdn.vox-cdn.com/thumbor/-bKrYahnwqww9sH9v2h34v9ViA0=/0x114:585x559/1200x800/filters:focal(248x297:340x389)/cdn.vox-cdn.com/uploads/chorus_image/image/57272301/Screen_Shot_2017_10_23_at_10.16.32_AM.0.png";
    let orangeImage = "http://soappotions.com/wp-content/uploads/2017/10/orange.jpg";
    let waterImage = "data:image/jpeg;base64,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";
    
    let result1 = {
        img: orangeImage,
        name: "oranges",
        total_required: 10,
        upvote: 6
    };
    let result2 = {
        img: appleImage,
        name: "apples",
        total_required: 8,
        upvote: 1
    };
    let result3 = {
        img: waterImage,
        name: "water pack (100 packs)",
        total_required: 100,
        upvote: 44
    };

    this.setState({
        result: [result1, result2, result3]
    });
}
    
// List of search items
    render() {
        this.getHardCodedResult();
          const imageURL = props.image;
  const name = props.name;
  const total_required = props.total_required;
  const upvote = props.upvote;
        const requestItems = this.state.result.map(
        (requestItem) => {
            return (
            <RequestItem
                imageURL={requestItem.imageURL}
                name={requestItem.name}
                total_required={requestItem.total_required}
                upvot={requestItem.upvote}
            />
            );
        }); // For the key, use the unique ID.

        return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
        );
    }
}

export default RequestList;