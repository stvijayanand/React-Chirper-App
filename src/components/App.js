import React, { Component } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading"
import NewTweet from "./NewTweet"
import TweetPage from "./TweetPage"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (<div>
      <LoadingBar />
    {this.props.loading === true ? null : <TweetPage match={{params: {id: "czpa59mg577x1oo45cup0d"}}} />}
    </div>);
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);
