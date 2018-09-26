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



export default function SignUp (props) {
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
                    id="standard-dense"
                    label="Email"
                    className="dense"
                    margin="dense"
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <TextField
                    id="standard-dense"
                    label="Password"
                    className="dense"
                    margin="dense"
                    fullWidth
                    type="Password"
                  />
                </GridItem>
                <GridItem xs={10} sm={4} md={8}>
                  <TextField
                    id="standard-dense"
                    label="Repeat-Password"
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
                  <Button color="primary" >Sign UP</Button>
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
  )
}