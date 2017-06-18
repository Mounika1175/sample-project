export default function reducer(state = {
        posts: [],
        fetching: false,
        fetched: false,
        error: null,
        picked: false,
        post: {}
    }, action){

        switch (action.type){
            case "FETCH_POSTS":{
                return {...state, fetching: true, fetched: false}
            }
            case "FETCH_POSTS_REJECTED":{
                return {...state, fetching: false, error: action.payload, posts:[]}
            }
            case "FETCH_POSTS_FULFILLED": {
                return {...state, fetched: true, fetching: false, posts: action.payload}
            }
            case "PICKED_POST": {
                return {...state, picked: true, post: action.payload}
            }
            default: {
                return state;
            }

        }
    }