import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import loading from './../images/loader.gif';
import store from './../store';

import { bindActionCreators } from 'redux';
import { fetchPosts, postPicked } from './../actions/postActions'

import Posts from './Posts'

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(fetchPosts, postPicked, dispatch) };
}

class App extends Component {

  componentDidMount() {
    document.getElementById('category').value="funny";
    store.dispatch(fetchPosts('funny'))
  }

  search(event){
      store.dispatch(fetchPosts(event.target.value));
  };

  postPick(){
    console.log("postpick");
    store.dispatch(postPicked());
  }

  render() {
    const { posts, fetching, fetched } =  this.props.posts;
    return (
      <div>
      <div className="App">
        <div className="col-md-12 App-header" >
          <div className="col-md-6">
          <h4>Welcome to Web-test</h4>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="search..." onChange={this.search} id="category" className="form-control" />
          </div>
        </div>
      </div>
        {typeof posts!== 'undefined' && 
          <div className="container">
            <div className="posts">
              {!fetched && posts.length === 0 && <div className="text-center noposts">
                <img alt="loader" src={loading} />
                </div>}
              {fetched && posts.length === 0 && <h4 className="text-center noposts">No Posts Found.</h4>}
              {posts.length > 0 &&
                  <div style={{ opacity: fetching ? 0.5 : 1 }}>
                    <Posts posts={posts}  post={this.props.posts.post}/>
                  </div>}
            </div>
          </div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


