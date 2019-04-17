import React, { Component } from "react";
import { connect } from "react-redux";
import authedUser from "../reducers/authedUser";
import tweets from "../reducers/tweets";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    console.log(this.props);
    return <div className="tweet" />;
  }
}

const mapStateToProps = ({ authedUser, tweets, users }, { id }) => {
  const tweet = tweets[id];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  };
};

export default connect(mapStateToProps)(Tweet);
