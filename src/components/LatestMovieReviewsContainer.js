import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fCV4O6c4NRzZDYNq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;	            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ reviews: data.results })
      })
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
