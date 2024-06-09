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
            <MKTypography variant="h3" my={1}>
              How does Brothas Express work?
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              We are a community of black men who share one common goal; to redefine thriving,
              healthy masculinity for the benefit of ourselves and the relationships we have with
              others.
            </MKTypography>
            <MKTypography
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
              View our season 1<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
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
                    <Icon fontSize="small">mediation</Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography variant="body2" color="textSecondary" pl={2}>
                    Weekly virtual discussion sessions on specific topics
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
                    <Icon fontSize="small">token</Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography variant="body2" color="textSecondary" pl={2}>
                    {
                      " A growing library of digestable, curated content from thought-leaders on masculinity"
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
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                  >
                    <Icon fontSize="small">settings_overscan</Icon>
                  </Box>
                </Grid>
                <Grid item xs>
                  <MKTypography variant="body2" color="textSecondary" pl={2}>
                    {"An exclusive online space to share thoughts ask advice of each other."}
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
