import axios from 'axios';

export function fetchPosts(category) {
    return function(dispatch){
        axios.get(`https://www.reddit.com/r/${category}.json`)
            .then((response)=>{
                let resData = {};
                if(typeof response !== 'undefined'){
                    resData = response.data.data.children;
                }
                dispatch({type: "FETCH_POSTS_FULFILLED", payload: resData});
            })
            .catch((err) => {
                dispatch({type: "FETCH_POSTS_REJECTED", payload: err});
            });
    }
}


export function postPicked(post) {
    return function(dispatch){
        dispatch({type: "PICKED_POST", payload: post});
    }
}
