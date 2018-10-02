import React from "react";

// for Dialog
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import AnswerVariant from "../../components/AnswerVariant/AnswerVariant.js";

import { connect } from "react-redux";
import {addNewPoll} from "../../actions/addNewPoll.js";

class CreatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModal: false,
      modalEditIndex: false,
      modalText: "",
      question: "",
      answers: []
    };
  }
  componentDidMount() {
    this.onAddAnswer();
  }
  onOK = () => {
    if (!this.state.question) {
      alert("vvedite vopros");
      return;
    }
    if (this.state.answers.length == 1) {
      alert("nujno bolshe zolota");
      return;
    }
    let question = this.state.question;
    let answers = this.state.answers.map((item, index) => {
      return Object.assign({}, item, { id_a: index }, { count: 0 });
    });
    let Poll = {
      question,
      answers,
      count: 0,
      id_p: Math.max(this.props.allVoters.map(item=>item.id_p)),
    };
    console.log(Poll);
    this.props.CreateNewPoll(Poll);
    this.props.history.push("/Dashboard");
  };
  onQuestionEdit = e => {
    let question = e.target.value;
    this.setState({ question });
  };
  onNavBtnClick = (e, index, type) => {
    let answers = this.state.answers.slice();
    let a;
    switch (type) {
      case "up":
        a = answers[index - 1];
        answers[index - 1] = answers[index];
        answers[index] = a;
        break;
      case "down":
        a = answers[index + 1];
        answers[index + 1] = answers[index];
        answers[index] = a;
        break;
      case "cancel":
        answers.splice(index, 1);
        break;
      default:
        return answers;
    }
    this.setState({ answers });
  };
  onModalOpen = (e, index) => {
    let modalText = this.state.answers[index].text;
    let modalEditIndex = index;
    this.setState({ isAddModal: true, modalText, modalEditIndex });
  };
  onModalClose = () => {
    this.setState({ isAddModal: false, modalText: "" });
  };
  onAddAnswer = () => {
    let answers = this.state.answers.slice();
    let text = `this is the Answer #${answers.length + 1} for the Question`;
    answers.push(Object.assign({}, { text }));
    this.setState({ answers });
  };
  onModalEdit = e => {
    let modalText = e.target.value;
    this.setState({ modalText });
  };
  onModalAccept = e => {
    let answers = this.state.answers.slice();
    answers[this.state.modalEditIndex].text = this.state.modalText;
    this.setState({ answers });
    this.onModalClose();
  };
  render() {
    const { classes } = this.props;
    const {
      question,
      answers,
      isAddModal,
      modalText,
      modalEditIndex
    } = this.state;
    return (
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={2} md={10}>
            <Card>
              <CardHeader color="primary">
                <h4 className="cardTitleWhite">Create new Poll</h4>
                <p className="cardCategoryWhite">
                  Please, add ur question and answers for polling
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={11}>
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Question"
                      type="answer"
                      fullWidth={true}
                      maxWidth="md"
                      onChange={e => this.onQuestionEdit(e)}
                      value={question}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={11}>
                    <Table>
                      {answers.length &&
                        answers.map((item, key) => {
                          return (
                            <TableRow key={key}>
                              <TableCell>
                                <AnswerVariant
                                  text={item.text}
                                  key={key}
                                  index={key}
                                  onNavBtnClick={this.onNavBtnClick}
                                  onModalOpen={this.onModalOpen}
                                  count={answers.length}
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </Table>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.onAddAnswer}>
                  Add New Answer
                </Button>
                <Button color="danger" onClick={this.onOK}>
                  OK
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <Dialog
          open={isAddModal}
          fullWidth={true}
          maxWidth="md"
          onClose={this.onModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>Here u can edit your answer:</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Edit"
              type="answer"
              fullWidth={true}
              maxWidth="md"
              onChange={e => this.onModalEdit(e)}
              value={modalText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onModalClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onModalAccept} color="primary">
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
const MapStateToProps = state => {
  return {
    IsAuthorize: state.user.isAuthorize,
    allVoters:state.voters.polls,
  };
};
const MapDispatchToProps = dispatch => {
  return {
    CreateNewPoll: poll => dispatch(addNewPoll(poll))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(CreatePoll);
