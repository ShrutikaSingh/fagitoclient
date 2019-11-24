import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (
      <div>

        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h6>Rating point: {rating}</h6>
        
      </div>
    );
  }
}
