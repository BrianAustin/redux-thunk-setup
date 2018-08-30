import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  handleFetchVideos = () => {
    this.props.fetchVideos('cats');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFetchVideos}>Fetch Videos</button>
        {this.props.videos.map(video => (
          <div key={video.id}>{video.id}</div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    videos: store.video.all
  }
}

export default connect(
  mapStoreToProps, 
  actions
)(App);

// 11. import connect from react redux and assign to component as HOC (Higher Order Component)
// 12. bind our redux store property (video.all) to our component's props (this.props.videos)
// 13. import all our actions and pass them to our component as actions
// 14. create store/actions/index.js
// GOTO: ./store/actions/index.js
