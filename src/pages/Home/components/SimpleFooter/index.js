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
import IconButton from "@mui/material/IconButton";
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
            <IconButton
              component="a"
              href="https://instagram.com/brothas_express"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: light ? "white" : "#E1306C",
                mx: 1,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: "transparent",
                },
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@brothas.express?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: light ? "white" : "#000000",
                mx: 1,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: "transparent",
                },
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>
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
