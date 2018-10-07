import React from "react";

// import vsyakoy figni

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TextField from '@material-ui/core/TextField';
import { registerUser } from "../../actions/authentication";
import {loginUser} from "../../actions/authentication";
import {connect} from "react-redux";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  onTypeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onButtonClick = () => {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    }
    this.props.loginUserAction(user);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
}
  render() {
    const {errors}= this.state
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className="cardTitleWhite">
                  Sign into Voter App</h4>
                <p className="cardCategoryWhite">
                  Please, enter your email and password</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={10} sm={10} md={8}>
                    <TextField
                      label="email"
                      name="email"
                      className="dense"
                      margin="dense"
                      fullWidth
                      onChange={this.onTypeText}
                      value={this.state.email}
                    />
                    {errors.email && (<div style={{color:"red"}} >{errors.email}</div>)}
                  </GridItem>
                  <GridItem xs={10} sm={10} md={8}>
                    <TextField
                      label="password"
                      name="password"
                      className="dense"
                      margin="dense"
                      fullWidth
                      type="Password"
                      onChange={this.onTypeText}
                      value={this.state.password}
                    />
                    {errors.password && (<div style={{color:"red"}} >{errors.password}</div>)}
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={10} sm={5} md={8}>
                    <Button color="primary" onClick={this.onButtonClick}>Sign IN</Button>
                  </GridItem>
                  <GridItem xs={10} sm={5} md={8}>
                    <a
                      href="/SignUp"
                      className="cardLink"
                    >
                      first time user? Sign Up
                    </a>
                  </GridItem>
                </GridContainer>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
  const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}
  const mapDispatchToProps = dispatch => {
  return{
    loginUserAction: user => dispatch(loginUser(user))
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(SignIn)