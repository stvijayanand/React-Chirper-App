import {saveLikeToggle, saveTweet} from "../utils/api"
import {showLoading, hideLoading} from "react-redux-loading"

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

const addTweet = tweet =>{
    return {
        type: ADD_TWEET,
        tweet
    };
}

export const handleSaveTweet = (text, replyingTo) =>{
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        return saveTweet({
                    text,
                    author: authedUser,
                    replyingTo
                })
                .then(tweet => dispatch(addTweet(tweet)))
                .then(() => dispatch(hideLoading()));
    }

}

export function receiveTweets(tweets){
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

const toggleTweets = ({authedUser, id, hasLiked}) => {
    return {
        type: TOGGLE_TWEET,
        authedUser,
        id,
        hasLiked
    }
}

export function handleToggleTweet(info){
    return dispatch => {
        dispatch(toggleTweets(info));
        return saveLikeToggle(info)
                .catch(e => {
                    console.warn("saveLikeToggles api call failed");
                    dispatch(toggleTweets(info));
                    alert('Filed. Pls try again.')
                })
    }

}