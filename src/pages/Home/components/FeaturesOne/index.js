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
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={2}>
              How does brothas express work?
            </MKTypography>

            {/* <MKTypography
              component="a"
              href="https://www.instagram.com/brothas_express/"
              target="_blank"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              Checkout season 1<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography> */}
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Grid container alignItems="flex-start" p={2}>
                <Grid item>
                  <Box
                    width="3rem"
                    height="3rem"
                    bgcolor="info.main"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                  >
                    <Icon sx={{ color: "light.main" }} fontSize="large">
                      diversity_3
                    </Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography
                    variant="subtitle2"
                    fontWeight={"bold"}
                    sx={{ color: "text.focus" }}
                    pl={2}
                  >
                    {" "}
                    {"Weekly discussion sessions on specific topics related to masculinity"}
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="flex-start" p={2}>
                <Grid item>
                  <Box
                    width="3rem"
                    height="3rem"
                    bgcolor="info.main"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                  >
                    <Icon sx={{ color: "light.main" }} fontSize="large">
                      book
                    </Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography
                    variant="subtitle2"
                    fontWeight={"bold"}
                    sx={{ color: "text.focus" }}
                    pl={2}
                  >
                    {" "}
                    {
                      " A growing Library of curated content from thought-leaders, scholars, and peers"
                    }
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="flex-start" p={2}>
                <Grid item>
                  <Box
                    width="3rem"
                    height="3rem"
                    bgcolor="info.main"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                  >
                    <Icon sx={{ color: "light.main" }} fontSize="large">
                      forum
                    </Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography
                    variant="subtitle2"
                    fontWeight={"bold"}
                    sx={{ color: "text.focus" }}
                    pl={2}
                  >
                    {
                      "Exclusive access to Express Nexus, an online space to share thoughts and ask advice of each other whenever"
                    }
                  </MKTypography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
