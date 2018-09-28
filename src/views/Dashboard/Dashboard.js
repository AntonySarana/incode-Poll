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
import SelectPoll from "../../actions/selectPoll.js";
import { GET_ALL_POLLS_REQUEST, GET_ALL_POLLS_SUCCESS } from '../../actions/actionType';
import { getAllPolls } from "../../actions/getAllPolls";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVoted: []/*["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]*/,
      dataNotVoted: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
      isViewNew: true,
    };
  };

  componentDidMount () {
    console.log(this.props.polls);
    this.props.getAllPollsAction().then(data=>{
      const dataVoted = this.props.polls;
      this.setState({dataVoted,});
      }
    );
  }

  onFilterClick = () => {
    let isViewNew = !this.state.isViewNew;
    this.setState({isViewNew});

    // --- pri poyavlenii BD
    /*let polls = this.props.polls
    let voted = this.props.user.pollVoted // - massiv ID vsex progolosovannix
    let dataVoted=[];
    let dataNotVoted=[];
    polls.map(poll=>{
      voted.map(id => {
        if (poll.id === id) return dataVoted.push(poll)
        else return dataNotVoted.push(poll);
      })
    })

    this.setState({ isViewNew /*dataVoted,dataNotVoted, });*/
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
                    })}
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
    user: state.user, // - info po useru
    polls: state.voters.polls, // - vse golosovalki
  };
};
const MapDispatchToProps = dispatch => {
  return {
  getAllPollsAction: () => dispatch(getAllPolls()),
  selectPoll: (poll) => dispatch(SelectPoll(poll)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Dashboard);
