import React from "react";

// import vsyakoy figni


import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "components/CustomButtons/Button.jsx";


export default function QouteItem (props) {
  const { data } = props;
  return (
    <React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={2} md={12}>
                <Button
                  color="gray"
                  fullWidth={true}
                  onClick = {(e, item = props.data)=>props.onPollClick(e, item)}
                >{data.question}</Button>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  )
}
