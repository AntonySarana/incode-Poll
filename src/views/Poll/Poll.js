import React from "react";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { connect } from "react-redux";

const peoples = "http://localhost:3001/Poll";

class Poll extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    fetch(peoples)
      .then(res => res.json())
      .then(peoples => {console.log(peoples)})
        }
  render() {
    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4 className="cardTitleWhite">Register with another APP</h4>
            <p className="cardCategoryWhite">
              Please, enter your email and password
            </p>
          </CardHeader>
          <CardBody>
            <p>{this.props.poll}</p>


          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.selectPoll.poll
  };
};

export default connect(mapStateToProps)(Poll);
