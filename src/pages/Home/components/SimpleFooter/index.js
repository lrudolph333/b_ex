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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

function SimpleFooter({ company, links, light }) {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href} target="_blank">
          <MKTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, made with
          <MKBox fontSize={size.md} color={light ? "white" : "text"} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          by
          <Link href={href} target="_blank">
            <MKTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
              &nbsp;{name}&nbsp;
            </MKTypography>
          </Link>
          for a better web.
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
          <MKBox display="flex" justifyContent="center" alignItems="center">
            {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <MKBox
                component="i"
                color="#55acee"
                fontSize="1.125rem"
                className="fab fa-discord"
                sx={{ margin: "0 10px" }}
              />
            </Link> */}
            <Link
              href="https://instagram.com/brothas_express"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MKBox
                component="i"
                color="#E1306C"
                fontSize="1.125rem"
                className="fab fa-instagram"
                mx={2}
                // sx={{ margin: "0 10px" }}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@brothas.express?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MKBox
                component="i"
                color="#E1306C"
                fontSize="1.125rem"
                className="fab fa-tiktok"
                mr={2}

                // sx={{ margin: "0 10px" }}
              />
            </Link>
            {/* <Link href="https://treyr.me" target="_blank" rel="noopener noreferrer">
              <MKBox
                component="i"
                color="#000"
                fontSize="1.125rem"
                className="fas fa-globe"
                sx={{ margin: "0 10px" }}
              />
            </Link> */}
          </MKBox>
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: "https://treyr.me/", name: "Trey" },
  links: [{ href: "https://buymeacoffee.com/treyruiii", name: "Buy Me A Coffee" }],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.shape),
  light: PropTypes.bool,
};

export default SimpleFooter;
