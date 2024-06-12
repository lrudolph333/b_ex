import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../../firebaseConfig"; // Adjust the path as necessary

// Function to calculate age based on birthdate
const calculateAge = (birthdate) => {
  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const SimpleTable = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // const q = query(collection(firestore, "users"), orderBy("createdAt", "desc"), limit(5));
        const q = query(collection(firestore, "users"), limit(5));
        const querySnapshot = await getDocs(q);
        console.log("got docs");
        const membersData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("data:" + data);
          var joinedDate = Date(data.createdAt);
          // const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
          // const formattedDate = joinedDate.toLocaleDateString("en-US", options);

          return {
            id: doc.id,
            name: data.name || "",
            city: data.city || "",
            birthdate: data.birthday || "",
            createdAt: joinedDate, //? data.createdAt.toDate() : new Date(),
          };
        });
        setMembers(membersData);
      } catch (error) {
        console.error("error: " + error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="primary" textAlign="center">
              View the newest Members
            </MKTypography>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Joined Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell align="left" width="20%">
                    <Typography fontWeight="bold">{member.name}</Typography>
                  </TableCell>
                  <TableCell align="left" width="20%">
                    {member.city}
                  </TableCell>
                  <TableCell align="left" width="10%">
                    {calculateAge(member.birthdate)}
                  </TableCell>
                  <TableCell align="left" width="20%">
                    {/* {member.createdAt.toLocaleDateString()} */}
                    {member.createdAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </MKBox>
  );
};

export default SimpleTable;
