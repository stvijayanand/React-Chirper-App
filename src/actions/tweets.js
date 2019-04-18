import {saveLikeToggle} from "../utils/api"

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

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