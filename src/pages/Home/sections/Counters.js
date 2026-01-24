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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultCounterCard from "../components/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="primary" textAlign="center">
              {"How to Get Involved"}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1}
              color={"secondary.light"}
              title="Tap in with the socials"
              description="We post all recaps of our episodes here so you can learn with us."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={2}
              color={"secondary.light"}
              title="Show up"
              description="The most transformational learning happens in community, so come to an episode."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3}
              color={"secondary.light"}
              title={
                <>
                  Browse the{" "}
                  <Link
                    href="https://brothas-express.notion.site/Brothas-Express-Library-5bf8e9d563014258bf168224f99bb553"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "inherit", textDecoration: "underline" }}
                  >
                    library
                  </Link>
                </>
              }
              description="We have detailed episode guides that walk you through particular aspects of masculinity, take it at your own pace."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
