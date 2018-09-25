import React from "react";
import { NavLink } from "react-router-dom";


// import vsyakoy figni

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import QouteItem from "../../components/QuoteItem/QouteItem.js";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVoted: ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
      dataNotVoted: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
      isViewNew: true
    };
  }
  onFilterClick = () => {
    let isViewNew = !this.state.isViewNew;
    this.setState({ isViewNew });
  };
  render() {
    const { classes } = this.props;
    const { isViewNew, dataVoted, dataNotVoted } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={2} md={10}>
            <NavLink to={"/CreatePoll"}>
              <Button color="primary">Add New Poll</Button>
            </NavLink>
          </GridItem>
          <GridItem xs={12} sm={10} md={10}>
            <Card>
              <CardHeader color="info">
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Button
                      color={`${isViewNew ? "primary" : "gray"}`}
                      onClick={this.onFilterClick}
                      disabled={!isViewNew}
                    >
                      Not voted polls
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Button
                      color={`${!isViewNew ? "primary" : "gray"}`}
                      onClick={this.onFilterClick}
                      disabled={isViewNew}
                    >
                      Voted polls
                    </Button>
                  </GridItem>
                </GridContainer>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {isViewNew &&
                    dataNotVoted.map((item, key) => {
                      return (
                        <GridItem xs={12} sm={2} md={12}>
                          <Table>
                            <TableRow>
                              <TableCell>
                                <QouteItem data={item} key={key} />
                              </TableCell>
                            </TableRow>
                          </Table>
                        </GridItem>
                      );
                    })}

                  {!isViewNew &&
                    dataVoted.map((item, key) => {
                      return (
                        <GridItem xs={12} sm={2} md={12}>
                          <Table>
                            <TableRow>
                              <TableCell>
                                <QouteItem data={item} key={key} />
                              </TableCell>
                            </TableRow>
                          </Table>
                        </GridItem>
                      );
                    })}
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={10} sm={5} md={8}>
                    <Button color="primary">Sign UP</Button>
                  </GridItem>
                  <GridItem xs={10} sm={5} md={8}>
                    <a
                      href="#"
                      className={classes.cardLink}
                      onClick={e => e.preventDefault()}
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
    );
  }
}
export default withStyles(styles)(Dashboard);
