import React from "react";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PollItem from "../../components/PollItem/PollItem";
import { connect } from "react-redux";
import {makeChoise} from "../../actions/makeChoise";


class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onAnswerClick = (e, item) => {

    let choise = {
      id_a: item.id_a,
      id_p:this.props.poll.id_p,
    }
    console.log(choise);
    this.props.makeChoiseAction(choise)

  };
  componentDidMount() {

  }
  render() {
    const { poll } = this.props;
    return (
      <div>
        {!poll._id && this.props.history.push("/Dashboard")}
        <Card>
          <CardHeader color="primary">
            <h4 className="cardTitleWhite">This is Poll result</h4>
            <p className="cardCategoryWhite">
              Please, choose ur answer if u have not yet
            </p>
          </CardHeader>
          <CardBody>
            <h3>{poll.question}</h3>
            {poll.answers.map((item, key) => {
              return (
                <PollItem
                  answer={item}
                  key={key}
                  count = {poll.count}
                  onAnswerClick={this.onAnswerClick}
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
    poll: state.selectPoll
  };
};
const mapDispatchToProps = dispatch => {
  return {
    makeChoiseAction: choise => dispatch(makeChoise(choise))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Poll);
