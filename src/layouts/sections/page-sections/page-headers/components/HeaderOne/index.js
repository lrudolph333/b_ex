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
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/landing.png";
import ReactPlayer from "react-player";

function HeaderOne() {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <MKBox component="header" position="relative" height="100%">
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="90vh"
          sx={{
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <Box height={"10vh"}></Box>
            <Grid mt={2} mb={2} container flexDirection="row" justifyContent="center">
              <Grid
                container
                item
                xs={12}
                md={6}
                lg={6}
                flexDirection="column"
                justifyContent="center"
                alignItems={isMdDown ? "center" : "flex-start"}
              >
                <MKTypography
                  variant="h1"
                  color="white"
                  mb={3}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                      textAlign: "center",
                    },
                  })}
                >
                  Brothas Express
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  opacity={0.8}
                  // pr={6}
                  // mr={6}
                  sx={{
                    textAlign: isMdDown ? "center" : "left",
                  }}
                >
                  A reflective conversation space to redefine thriving manhood for Black men.
                </MKTypography>
                <Stack
                  direction={isMdDown ? "column" : "row"}
                  spacing={1}
                  mt={3}
                  alignItems="center"
                >
                  <MKButton color="white" href="/join">
                    Join
                  </MKButton>
                  {/* <MKButton variant="text" color="white">
                    Learn more
                  </MKButton> */}
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                width={"100%"}
                display="flex"
                justifyContent={"center"}
              >
                <ReactPlayer width="50%" url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
              </Grid>
            </Grid>
            <Box height={"10vh"}></Box>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}

export default HeaderOne;
