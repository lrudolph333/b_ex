/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components

// @mui material components
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
// @mui icons

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
import SimpleFooter from "examples/Footers/SimpleFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/join",
          label: "Join",
          color: "primary",
        }}
        sticky
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box height={"10vh"}></Box>
      <MKBox mt={6} px={1} width="100%" mx="auto" position="relative" zIndex={2}>
        {/* <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}> */}
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="primary"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-2}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Join Brothas Express
                </MKTypography>
              </MKBox>
              {/** TODO make sure no email joins twice */}
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth required />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="phone" label="Phone" fullWidth required />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="text" label="Name" fullWidth required />
                  </MKBox>

                  <MKBox mb={0}>
                    <MKInput type="text" label="City" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKBox mb={-2} ml={1.7} zIndex={2} fontWeight={"bold"}>
                      <MKTypography variant="overline">Birthday</MKTypography>
                    </MKBox>
                    <MKInput type="date" fullWidth />
                    <MKBox>
                      <MKTypography variant="overline">
                        used to show your age in community spaces
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  {/* <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox> */}
                  {/* <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox> */}
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Subscribe to text updates (cancel at anytime)
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Subscribe to newsletter
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="primary" fullWidth>
                      Join
                    </MKButton>
                  </MKBox>
                  {/* <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox> */}
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      {/* <Box height={"10vh"}></Box> */}

      <MKBox
        py={3}
        px={1}
        mt={6}
        width="100%"
        // position="absolute"
        // zIndex={2}
        // bottom="1.625rem"
      >
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
