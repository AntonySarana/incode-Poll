import React from "react";

// import vsyakoy figni

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { connect } from "react-redux";

function Poll(props) {
  console.log(props)
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
          <p>{props.poll}</p>


        </CardBody>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    poll: state.selectPoll.poll
  };
};

export default connect(mapStateToProps)(Poll);
