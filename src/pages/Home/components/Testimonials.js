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

// Testimonials data - you can add more testimonials here
// Each testimonial will alternate between text-left/video-right and video-left/text-right
const testimonials = [
  {
    question: "What would you tell someone who is thinking about joining?",
    videoUrl: "https://youtu.be/RhS_8TUMBoY",
  },
  {
    question: "What's your favorite part of brothas express?",
    videoUrl: "https://youtu.be/fHnBcQon_js",
  },
  {
    question: "What have you gained?",
    videoUrl: "https://youtu.be/vCYartaacNk",
  },
  {
    question: "Why did you show up?",
    videoUrl: "https://youtu.be/VU7lafGAl4k",
  },
  {
    question: "What made you want to come back?",
    videoUrl: "https://youtu.be/1Xh_cxp5N5U",
  },
  {
    question: "How would you describe brothas express?",
    videoUrl: "https://youtu.be/akNSlyWlOFA",
  },
  {
    question: "How did you hear about us?",
    videoUrl: "https://youtu.be/H4EbaF2bH6Y",
  },
];

function Testimonials() {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h2" color="primary" textAlign="center">
              Testimonials
            </MKTypography>
          </Grid>
        </Grid>
        {testimonials.map((testimonial, index) => {
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

export default Testimonials;
