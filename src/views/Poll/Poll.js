import React from "react";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PollItem from "../../components/PollItem/PollItem";
import { connect } from "react-redux";
import {makeChoise} from "../../actions/makeChoise";
import {getOnePoll} from "../../actions/selectPoll";
import {userChoise} from "../../actions/userChoise";

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVoteEnabled:{
        id_a:0,
        id_p:0,
      }
    };
  }
  onAnswerClick = (e, item) => {
    let choise = {
      id_a: item.id_a,
      id_p: this.props.poll.id_p,
    }
    this.props.makeChoiseAction(choise).then(data=>
    this.props.getOnePollAction(this.props.poll.id_p));
    this.props.userChoiseAction(this.props.user.id,choise);
  };
  componentDidMount() {
    let isVoteEnabled = this.props.user.iVoted.filter(item=>item.id_p === this.props.poll.id_p)
    this.setState({isVoteEnabled:isVoteEnabled[0]});

  }
   componentWillReceiveProps(nextProps) {
    if(nextProps.user.iVoted) {
     const isVoteEnabled = nextProps.user.iVoted.find(item=>item.id_p === this.props.poll.id_p)
      if (this.props.poll.id_p)
        this.setState({
          isVoteEnabled: isVoteEnabled
        });
    }
}  
  render() {
    const { poll,user } = this.props;
    const {isVoteEnabled} = this.state;
    return (
      <div>
        {!poll.id_p && this.props.history.push("/Dashboard")}
        <Card>
          <CardHeader color="primary">
            <h4 className="cardTitleWhite">This is Poll result</h4>
            <p className="cardCategoryWhite">
              Please, choose ur answer if u have not yet
            </p>
          </CardHeader>
          <CardBody>
            <h3>{poll.question}</h3>
            {poll.answers && poll.answers.map((item, key) => {
              return (
                <PollItem
                  answer={item}
                  key={key}
                  count = {poll.count}
                  onAnswerClick={this.onAnswerClick}
                  isVoteEnabled={isVoteEnabled ? true : false}
                  voted = {isVoteEnabled && (item.id_a===isVoteEnabled.id_a) ? true : false}

                />
              );
            })}
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.selectPoll,
    user: state.auth.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    makeChoiseAction: choise => dispatch(makeChoise(choise)),
    getOnePollAction: id_p => dispatch(getOnePoll(id_p)),
    userChoiseAction: (userId,choise) => dispatch(userChoise(userId,choise)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Poll);
