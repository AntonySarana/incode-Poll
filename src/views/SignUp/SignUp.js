import React from "react";

// import vsyakoy figni


import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TextField from "@material-ui/core/TextField/TextField";
import {registerUser} from "../../actions/authentication";
import {connect} from "react-redux";


class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm:'',
      errors: {},
    }
  }
  onTypeText = (e)=> {
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  onButtonClick = ()=> {
    const {email,password,password_confirm}=this.state;
    const user = {
      email,
      password,
      password_confirm,
    }
    this.props.registerUserAction(user,this.props.history);
  }
  render(){
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className="cardTitleWhite">
                Register with another APP</h4>
              <p className="cardCategoryWhite">
                Please, enter your email and password</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={10} sm={4} md={8}>
                  <TextField
                    value={this.state.email}
                    name="email"
                    label="email"
                    className="dense"
                    margin="dense"
                    fullWidth
                    onChange={this.onTypeText}
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <TextField
                    onChange={this.onTypeText}
                    label="password"
                    name="password"
                    className="dense"
                    margin="dense"
                    fullWidth
                    type="Password"
                    value={this.state.password}
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <TextField
                    onChange={this.onTypeText}
                    value={this.state.password_confirm}
                    label="password_confirm"
                    name="password_confirm"
                    className="dense"
                    margin="dense"
                    fullWidth
                    type="Password"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridContainer>
                <GridItem xs={10} sm={5} md={8}>
                  <Button color="primary" onClick={this.onButtonClick}>Sign UP</Button>
                </GridItem>
                <GridItem xs={10} sm={5} md={8}>
                  <a
                    href="/SignIn"
                    className="cardLink"
                  >
                    alreday have account? Sign In
                  </a>
                </GridItem>
              </GridContainer>
            </CardFooter>

          </Card>
        </GridItem>
      </GridContainer>

    </div>
  )}
}
const mapStateToProps = store => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return{
    registerUserAction: user => dispatch(registerUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)