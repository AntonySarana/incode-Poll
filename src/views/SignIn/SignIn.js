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



export default function SignIn (props) {
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
                    label="Email"
                    className="dense"
                    margin="dense"
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={10} sm={10} md={8}>
                  <TextField
                    label="Password"
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
                  <Button color="primary" >Sign IN</Button>
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

