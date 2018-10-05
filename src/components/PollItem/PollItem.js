
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Divider from '@material-ui/core/Divider';
import React from "react";
import Button from '@material-ui/core/Button';


export default function PollItem(props) {
  const {answer,isVoteEnabled,voted} = props;
  var diagram = Math.round((answer.count/props.count)*100);
  if (!diagram) diagram= 0;
  return (
    <div>
      <Divider/>
        <GridContainer
          alignItems= "center"
          color="red"
        >
          <GridItem
            xs={12}
            sm={12}
            md={7}
            //style={{"background-color":`${}}`}}
          >
            <Button
              fullWidth="true"
              disabled={isVoteEnabled}
              variant={voted? 'contained':""}
              onClick={(e,answer = props.answer) => props.onAnswerClick(e,answer)}
            >{answer.text}</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            {answer.count}
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{
              color:"white",
              textAlign:"center",
              "border-radius": 5,
              "background-color": "blue",
              width: `${diagram ? diagram : 30}%`,
            }}>{`${diagram? diagram : 0} %`}</div>
          </GridItem>
        </GridContainer>
      <Divider/>
    </div>
  );
}