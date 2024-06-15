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

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import Divider from "@mui/material/Divider";
import SimpleFooter from "examples/Footers/SimpleFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
// Home page sections

// Home page components
import FAQSection from "./components/FAQ";
// Routes
import footerRoutes from "footer.routes";
import routes from "routes";
// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import Profile from "pages/LandingPages/Author/sections/Profile";
import SimpleTable from "./components/SimpleTable";
import Counters from "./sections/Counters";
// Images

function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user: " + user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={
          user
            ? //TODO implement logout functionality
              null
            : {
                type: "internal",
                route: "/join",
                label: "Join",
                // color: {{}},
              }
        }
        sticky
      />

      <MKBox display="flex" flexDirection="column" bgColor="info">
        <HeaderOne user={user}></HeaderOne>
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
          <Divider
            variant="middle"
            sx={{ marginLeft: "25%", marginRight: "25%", bgcolor: "text.main" }}
          />
          {/** How to get involved */}
          <Counters></Counters>
          <Divider
            variant="middle"
            sx={{ marginLeft: "25%", marginRight: "25%", bgcolor: "text.main" }}
          />
          {/** Meet the Founder */}
          <Profile></Profile>
          <Divider
            variant="middle"
            sx={{ marginLeft: "25%", marginRight: "25%", bgcolor: "text.main" }}
          />
          {/** Members */}
          {/* <Team></Team> */}
          <SimpleTable></SimpleTable>
          <Divider
            variant="middle"
            sx={{ marginLeft: "25%", marginRight: "25%", bgcolor: "text.main" }}
          />
          {/** FAQs */}
          <FAQSection></FAQSection>
        </Card>
        <MKBox pt={6} px={1} mt={6} mb={5}>
          <SimpleFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Home;
