import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const dummyData = [
  ["https://bit.ly/3t5q4yQ", "John Micheal", "New York", 28, "23/04/18"],
  ["https://bit.ly/3F35Zvm", "Alexa Liras", "Los Angeles", 32, "11/01/19"],
  ["https://bit.ly/3JL1rNU", "Laurent Perrier", "Chicago", 45, "19/09/17"],
  ["https://bit.ly/3F35Zvm", "Michael Levi", "Houston", 29, "24/12/08"],
  ["https://bit.ly/3t5q4yQ", "Richard Gran", "Phoenix", 39, "04/10/21"],
  ["https://bit.ly/3F35Zvm", "Miriam Eric", "San Diego", 25, "14/09/20"],
];

const SimpleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Profile</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Joined Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center" width="10%">
                <Avatar src={row[0]} alt={row[1]} />
              </TableCell>
              <TableCell align="left" width="20%">
                <Typography fontWeight="bold">{row[1]}</Typography>
              </TableCell>
              <TableCell align="left" width="20%">
                {row[2]}
              </TableCell>
              <TableCell align="left" width="10%">
                {row[3]}
              </TableCell>
              <TableCell align="left" width="20%">
                {row[4]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
