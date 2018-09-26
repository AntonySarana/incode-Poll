import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import withStyles from "@material-ui/core/styles/withStyles";

import {connect} from "react-redux";

/*const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};*/

class GreetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.IsAuthorize);
    const { IsAuthorize } = this.props;
    return (
      <React.Fragment>
        {IsAuthorize && <Dashboard />}
        {!IsAuthorize && <SignIn />}
      </React.Fragment>
    );
  }
}

const MapStateToProps = (state) => {
  return{
    IsAuthorize: state.user.isAuthorize,
  }
}
const MapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(MapStateToProps,MapDispatchToProps)(GreetingPage)
