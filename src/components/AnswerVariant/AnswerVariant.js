import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Icon from "@material-ui/core/Icon/Icon";

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

function Answervaritant(props) {
  const { classes, text, index, count } = props;
  return (
    <React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={4} md={9}>
          <p onClick={(e, index = props.index) => props.onModalOpen(e, index)}>
            {text}
          </p>
        </GridItem>
        <GridItem xs={12} sm={1} md={3}>
          {index !== 0 && (
            <Button
              justIcon
              fullWidth={true}
              id={index}
              color="info"
              onClick={(e, index = props.index, type = "up") =>
                props.onNavBtnClick(e, index, type)
              }
            >
              <Icon>arrow_upward</Icon>
            </Button>
          )}
          {index + 1 !== count && (
            <Button
              justIcon
              fullWidth={true}
              id={index}
              color="info"
              onClick={(e, index = props.index, type = "down") =>
                props.onNavBtnClick(e, index, type)
              }
            >
              <Icon>arrow_downward</Icon>
            </Button>
          )}
          <Button
            justIcon
            fullWidth={true}
            id={index}
            color="warning"
            onClick={(e, index = props.index, type = "cancel") =>
              props.onNavBtnClick(e, index, type)
            }
          >
            <Icon>cancel</Icon>
          </Button>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  );
}

export default withStyles(styles)(Answervaritant);
