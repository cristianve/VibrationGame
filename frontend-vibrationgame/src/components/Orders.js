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
  createData(0, "16 Mar, 2019 - 18:00", "ElvisPresley#3212", "Lobby", 6.25),
  createData(1, "16 Mar, 2019 - 18:00", "PaulMcCartney#4412", "Lobby", 8.2),
  createData(2, "16 Mar, 2019 - 18:00", "TomScholz#1212", "Lobby", 9.81),
  createData(3, "16 Mar, 2019 - 18:00", "MichaelJackson#0001", "Game", 4.39),
  createData(4, "15 Mar, 2019 - 18:00", "BruceSpringsteen#2121", "Lobby", 2.79),
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
            <TableCell>Hora de entrada</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Puntuación</TableCell>
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
