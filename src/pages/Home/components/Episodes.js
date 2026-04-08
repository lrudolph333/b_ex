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
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Video player
import ReactPlayer from "react-player";

// Episodes data - you can add more Episodes here
// Each testimonial will alternate between text-left/video-right and video-left/text-right
const episodes = [
  {
    question: "the masculinity card",
    videoUrl: "https://youtube.com/shorts/Bt_iSzz2R-4",
  },
  {
    question: "manhood in music",
    videoUrl: "https://youtube.com/shorts/_mQjbZ2PRpI",
  },
  {
    question: "calling in toxicity",
    videoUrl: "https://youtu.be/relx5EtcUms",
  },
  {
    question: "sex beyond domination",
    videoUrl: "https://youtu.be/dxyPdE7hFUE",
  },
];

function Episodes() {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h2" color="primary" textAlign="center">
              episodes
            </MKTypography>
            <br></br>
            <MKTypography variant="h6" color="primary" textAlign="center">
              {
                "here are a few discussions we've had. check out our library or instagram to see the rest."
              }
            </MKTypography>
          </Grid>
        </Grid>
        {episodes.map((testimonial, index) => {
          const isTextLeft = index % 2 === 0;
          const textGridOrder = isTextLeft
            ? { order: { xs: 1, md: 1 } }
            : { order: { xs: 1, md: 2 } };
          const videoGridOrder = isTextLeft
            ? { order: { xs: 2, md: 2 } }
            : { order: { xs: 2, md: 1 } };

          return (
            <Grid container spacing={4} alignItems="center" key={index} sx={{ mb: 6 }}>
              {/* Text Section */}
              <Grid item xs={12} md={6} {...textGridOrder}>
                <MKBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  height="100%"
                >
                  <MKTypography variant="h3" color="primary" mb={2} fontWeight="bold">
                    {testimonial.question}
                  </MKTypography>
                  {testimonial.name && (
                    <MKTypography variant="body2" color="text" opacity={0.8}>
                      — {testimonial.name}
                    </MKTypography>
                  )}
                </MKBox>
              </Grid>

              {/* Video Section */}
              <Grid item xs={12} md={6} {...videoGridOrder}>
                <MKBox
                  display="flex"
                  justifyContent={isMdDown || isTextLeft ? "center" : "flex-start"}
                  alignItems="center"
                  width="100%"
                >
                  <ReactPlayer
                    url={testimonial.videoUrl}
                    width="100%"
                    style={{ maxWidth: "500px" }}
                    controls
                  />
                </MKBox>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </MKBox>
  );
}

export default Episodes;
