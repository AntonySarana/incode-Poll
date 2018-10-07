import React from "react";
import { NavLink } from "react-router-dom";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import QouteItem from "../../components/QuoteItem/QouteItem.js";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import connect from "react-redux/es/connect/connect";
import { selectPoll } from "../../actions/selectPoll.js";
import { getAllPolls } from "../../actions/getAllPolls";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVoted: [],
      dataNotVoted: [],
      isViewNew: true,
      iVoted:[]
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user.iVoted) {
        this.setState({
          iVoted: nextProps.user.iVoted
        });
    }
}  
  componentDidMount() {
    this.props.getAllPollsAction().then(data => {
      const voted = this.state.iVoted; // - massiv ID vsex progolosovannix
      let dataVoted = [];
      let dataNotVoted = this.props.polls.slice();
      if (voted && voted.length===0) console.log(1)/* dataNotVoted = this.props.polls */
        else (voted.map(vote => {
          for (let i=0;i < dataNotVoted.length;i++)
          {
            if (vote.id_p === dataNotVoted[i].id_p) {
              dataVoted.push(dataNotVoted[i]);
              dataNotVoted.splice(i,i+1);
              return;
            }
          }
        }))       
      this.setState({ dataVoted, dataNotVoted });
    })
  }

  onFilterClick = () => {
    let isViewNew = !this.state.isViewNew;
    this.setState({ isViewNew });

  };
  onPollClick = (e, poll) => {
    this.props.selectPoll(poll);
    this.props.history.push("/Poll");
  };

  render() {
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
                      color={`${isViewNew ? "gray" : "primary"}`}
                      onClick={this.onFilterClick}
                      disabled={isViewNew}
                    >
                      Not voted polls
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Button
                      color={`${isViewNew ? "primary" : "gray"}`}
                      onClick={this.onFilterClick}
                      disabled={!isViewNew}
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
                                <QouteItem
                                  data={item}
                                  key={key}
                                  onPollClick={this.onPollClick}
                                />
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
                                <QouteItem
                                  data={item}
                                  key={key}
                                  onPollClick={this.onPollClick}
                                />
                              </TableCell>
                            </TableRow>
                          </Table>
                        </GridItem>
                      );
                    })
                  }

                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    user: state.auth.user, // - info po useru
    polls: state.voters.polls // - vse golosovalki
  };
};
const MapDispatchToProps = dispatch => {
  return {
    getAllPollsAction: () => dispatch(getAllPolls()),
    selectPoll: poll => dispatch(selectPoll(poll))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Dashboard);
