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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/landing.png";

function HeaderOne() {
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
            <Grid
              container
              item
              xs={12}
              md={7}
              lg={6}
              flexDirection="column"
              justifyContent="center"
            >
              <MKTypography
                variant="h1"
                color="white"
                mb={3}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Brothas Express
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                A reflective conversation space to redefine thriving manhood for Black men.
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton color="white">Join</MKButton>
                <MKButton variant="text" color="white">
                  Learn more
                </MKButton>
              </Stack>
              {/** TODO add youtube intro clip */}
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}

export default HeaderOne;
