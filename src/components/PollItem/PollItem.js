
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "@material-ui/core/Table/Table";
import TableCell from "@material-ui/core/TableCell/TableCell";
import React from "react";

export default function PollItem(props) {
  const {answer} = props;
  var diagram = Math.round((answer.count/props.count)*100);
  if (!diagram) diagram=0;
  return (
    <Table >
      <TableCell>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={7}
            onClick={(e,answer = props.answer) => props.onAnswerClick(e,answer)}
          >
            {answer.text}
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
      </TableCell>
    </Table>
  );
}