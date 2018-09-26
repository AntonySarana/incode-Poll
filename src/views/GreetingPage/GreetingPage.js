import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";


import {connect} from "react-redux";



class GreetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { isAuthorize } = this.props;
    return (
      <React.Fragment>
        {isAuthorize && <Dashboard />}
        {!isAuthorize && <SignIn />}
      </React.Fragment>
    );
  }
}

const MapStateToProps = (state) => {
  return{
    isAuthorize: state.user.isAuthorize,
  }
}
const MapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(MapStateToProps,MapDispatchToProps)(GreetingPage)
