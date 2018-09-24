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
import CustomInput from "components/CustomInput/CustomInput.jsx";

const styles = {
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
};


function SignUp (props) {
  const {classes} = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Register with another APP</h4>
              <p className={classes.cardCategoryWhite}>
                Please, enter your email and password</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={10} sm={4} md={8}>
                  <CustomInput
                    labelText = "email adress"

                    id = "email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <CustomInput
                    labelText = "pass"


                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <CustomInput
                    labelText = "repeat pass"


                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridContainer>
                <GridItem xs={10} sm={5} md={8}>
                  <Button color="primary" >Sign UP</Button>
                </GridItem>
                <GridItem xs={10} sm={5} md={8}>
                  <a
                    href="#"
                    className={classes.cardLink}
                    onClick={(e)=>e.preventDefault()}
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
  )
}
export default withStyles(styles)(SignUp);