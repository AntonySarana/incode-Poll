
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "@material-ui/core/Table/Table";
import TableCell from "@material-ui/core/TableCell/TableCell";
import React from "react";

export default function PollItem(props) {
  const {poll} = props
  return (
    <Table >
      <TableCell>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={7}
            onClick={(e,poll= props.poll) => props.onAnswerClick(e,poll)}
          >
            {poll.text}
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            {poll.count}
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{}}>{}</div>
          </GridItem>
        </GridContainer>
      </TableCell>
    </Table>
  );
}