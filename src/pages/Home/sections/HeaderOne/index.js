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
import { Box, Container, Grid, IconButton, Stack, useMediaQuery } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import logo from "assets/images/Brothas Express Final Logo(1).png";
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
          minHeight="100vh"
          // minWidth="100vw"
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
            <Grid my={isMdDown ? 10 : 2} container flexDirection="row" justifyContent="center">
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
                <MKBox
                  component="img"
                  src={logo}
                  alt="Brothas Express Logo"
                  width="240px"
                  height="240px"
                  borderRadius="50%"
                  mb={3}
                  sx={{
                    objectFit: "cover",
                    border: "3px solid white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                />
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
                  brothas express
                </MKTypography>
                <MKTypography
                  variant="h4"
                  color="white"
                  opacity={0.8}
                  // pr={6}
                  // mr={6}
                  sx={{
                    textAlign: isMdDown ? "center" : "left",
                  }}
                >
                  {"challenging patriarchy by redefining thriving masculinity, together"}
                </MKTypography>
                <Stack
                  direction={isMdDown ? "column" : "row"}
                  spacing={1}
                  my={3}
                  alignItems="center"
                >
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/brothas_express/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#800020",
                      width: "40px",
                      height: "40px",
                      mx: 1.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#9a0026",
                        transform: "scale(1.1)",
                      },
                      "& svg": {
                        color: "white",
                        fill: "white",
                      },
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        fill="white"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.tiktok.com/@brothas.express?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#800020",
                      width: "40px",
                      height: "40px",
                      mx: 1.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#9a0026",
                        transform: "scale(1.1)",
                      },
                      "& svg": {
                        color: "white",
                        fill: "white",
                      },
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                        fill="white"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://brothas-express.notion.site/Brothas-Express-Library-5bf8e9d563014258bf168224f99bb553"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#800020",
                      width: "40px",
                      height: "40px",
                      mx: 1.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#9a0026",
                        transform: "scale(1.1)",
                      },
                      "& svg": {
                        color: "white",
                        fill: "white",
                      },
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
                        fill="white"
                      />
                    </svg>
                  </IconButton>
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
                alignItems={"center"}
              >
                <ReactPlayer width="50%" url="https://youtube.com/shorts/WQma8bDLY80" />
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
