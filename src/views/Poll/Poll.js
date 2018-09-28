import React from "react";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PollItem from "../../components/PollItem/PollItem";
import {connect} from "react-redux";


class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollCount: 5
    };
  }
  onAnswerClick = (e,item) => {
    console.log(item);
  };
  componentDidMount() {
    let pollCount;
    this.props.poll.answers.map(item => {
      pollCount=1;
      return (pollCount);
    });
    this.setState({pollCount});
    console.log(this.state.pollCount);
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
              return <PollItem
                poll={item}
                key={key}
                onAnswerClick={this.onAnswerClick}
              />
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

export default connect(mapStateToProps)(Poll);
