import React from "react";

// import vsyakoy figni

import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "components/CustomButtons/Button.jsx";


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


function QouteItem (props) {
  const { classes, data } = props;
  return (
    <React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={2} md={12}>
                <Button
                  color="gray"
                  fullWidth={true}
                >{data}</Button>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  )
}
export default withStyles(styles)(QouteItem);