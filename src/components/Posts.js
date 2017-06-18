import React, { Component } from 'react'

import defaultimg from './../images/unknown.png';
import emailToAFriend from './../images/mail-logo.png';
import openOnReddit from './../images/reddit-logo.png';

import store from './../store';
import { postPicked } from './../actions/postActions'

export default class Posts extends Component {
  
  postPick(post){
    store.dispatch(postPicked(post));
    document.getElementById("overlay").style.display = "block";
  }

  overlayOff(){
    document.getElementById("overlay").style.display = "none";
  }

  render() {
    const posts = this.props.posts;
    const post = this.props.post;
    return (
       <div className="postsList">
          <div id="overlay" onClick={this.overlayOff} >
            <div className="col-sm-12 overlayContent"> 
              <div className="col-sm-3"> </div>    
              <div className="col-sm-6">
                  <div className="col-sm-4 sendIcons">
                    <div className="sendDiv col-sm-12 text-center">
                      { typeof post.data !== 'undefined' && 
                      <div className="dragablePart">
                        <div className="postThumbnail p0">
                          <img onError={(e)=>{e.target.src=defaultimg}} alt={post.data.title} className="thumbail img-circle" src={post.data.thumbnail} />
                        </div>
                        <div className="postDetails">
                          <div className="col-sm-12 p0 author">{post.data.author}</div>
                          <div className="col-sm-12 p0 postTitle">{post.data.title}</div>
                          <div className="col-sm-12 p0 commentsups">
                            <div className="col-sm-6 p0"><i className="fa fa-comments-o" aria-hidden="true"></i>  {post.data.num_comments}</div>
                            <div className="col-sm-6 p0"><i className="fa fa-heart-o" aria-hidden="true"></i> {post.data.ups}</div>
                          </div>
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                  <div className="col-sm-4 textdesc" >
                    Drag the card on the left to the desired action
                  </div>{ typeof post.data !== 'undefined' && 
                  <div className="col-sm-4 sendIcons">
                    <div className="sendDiv col-sm-12">
                      <a className="openonredditAnchor" href={"https://www.reddit.com/user/"+post.data.author} >
                      <img alt="openonreddit" src={openOnReddit} /><br/>
                      <b>Open on Reddit</b>
                      </a>
                    </div>
                    <div className="sendDiv col-sm-12">
                      <a className="openonredditAnchor" 
                      href={"mailto:?subject="+post.data.author+"&body="+post.data.title} >
                      <img alt="emailtoafriend" src={emailToAFriend} /><br/>
                      <b>Email to a Friend</b>
                      </a>
                    </div>
                  </div>}
              </div>    
              <div className="col-sm-3"> </div>    
            </div>
          </div>
          {posts.map((post, i) => 
            <div onClick={() => this.postPick(post)} className={'eachpost col-sm-12 img-responsive ' + (i%2===0?'even':'odd')} key={i}>
              <div className="postThumbnail col-sm-2 p0">
                <img onError={(e)=>{e.target.src=defaultimg}} alt={post.data.title} className="thumbail img-circle" src={post.data.thumbnail} />
              </div>
              <div className="postDetails col-sm-10">
                <div className="col-sm-12 p0 author">{post.data.author}</div>
                <div className="col-sm-12 p0">{post.data.title}</div>
                <div className="col-sm-12 p0 commentsups">
                  <div className="col-sm-4"><i className="fa fa-comments-o" aria-hidden="true"></i>  {post.data.num_comments} Comments</div>
                  <div className="col-sm-4"><i className="fa fa-heart-o" aria-hidden="true"></i> {post.data.ups} Ups</div>
                  <div className="col-sm-4"><i className="fa fa-arrow-down" aria-hidden="true"></i> {post.data.downs} Downs</div>
                </div>                
              </div>
            </div>)
          }        
      </div>
    )
  }
}


