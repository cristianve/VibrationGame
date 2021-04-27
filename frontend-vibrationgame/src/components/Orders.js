import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0,1, "ElvisPresley#3212", "CONNECTED", "START"),
  createData(1,1, "PaulMcCartney#4412", "CREATED", "START"),
  createData(2,1, "TomScholz#1212", "WAITING", "START"),
  createData(3,1, "MichaelJackson#0001", "JOINED", "START"),
  createData(4,1, "BruceSpringsteen#2121", "PLAYING", "START"),
  createData(5,1, "Test#2121", "END", "START"),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Listado de jugadores</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
           
            <TableCell>GAME_ID</TableCell>
            <TableCell>USERNAME</TableCell>
            <TableCell>SOCKET_STATE</TableCell>
            <TableCell align="right">SOCKET_ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
    </React.Fragment>
  );
}
