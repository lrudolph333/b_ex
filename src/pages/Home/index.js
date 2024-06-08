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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import SimpleFooter from "examples/Footers/SimpleFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
// Home page sections

// Home page components

// Routes
import footerRoutes from "footer.routes";
import routes from "routes";
// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
// Images

function Home() {
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

      <MKBox display="flex" flexDirection="column" bgColor="white">
        <HeaderOne></HeaderOne>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {/** Introduction */}
          <FeaturesOne></FeaturesOne>
          {/** Members */}
          {/** Meet the Founder */}
          {/** FAQs */}
          {/** How to get involved */}
        </Card>
        <MKBox pt={6} px={1} mt={6} mb={5}>
          <SimpleFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Home;
