/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Link } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKAvatar from "components/MKAvatar";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/grad_pic.jpg";

function Profile() {
  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="primary" textAlign="center">
              {"Meet the Founder"}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox textAlign="center" md={6} mb={-2}>
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={3}>
            <Grid item xs={12} md={6} mx={1}>
              <MKBox
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                <MKTypography variant="h3" textAlign="center">
                  {"Trey Rudolph"}
                </MKTypography>
              </MKBox>
              {/* <Container container display="flex" flex-direction="row" justifyContent="flex-start"> */}
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <Link href="https://twitter.com/T_Goody3" target="_blank" rel="noopener noreferrer">
                  <MKBox
                    component="i"
                    color="#55acee"
                    fontSize="1.125rem"
                    className="fab fa-twitter"
                    sx={{ margin: "0 10px" }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/trey-r-link/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MKBox
                    component="i"
                    color="#0077b5"
                    fontSize="1.125rem"
                    className="fab fa-linkedin"
                    sx={{ margin: "0 10px" }}
                  />
                </Link>
                <Link
                  href="https://instagram.com/icetrey12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MKBox
                    component="i"
                    color="#E1306C"
                    fontSize="1.125rem"
                    className="fab fa-instagram"
                    sx={{ margin: "0 10px" }}
                  />
                </Link>
                <Link href="https://treyr.me" target="_blank" rel="noopener noreferrer">
                  <MKBox
                    component="i"
                    color="#000"
                    fontSize="1.125rem"
                    className="fas fa-globe"
                    sx={{ margin: "0 10px" }}
                  />
                </Link>
              </MKBox>
              <MKTypography
                mt={2}
                variant="body1"
                fontWeight="light"
                color="text"
                textAlign="center"
              >
                {"What would you do if you weren't afraid?"} <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
