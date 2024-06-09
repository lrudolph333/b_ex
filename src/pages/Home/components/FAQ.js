import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import MKTypography from "components/MKTypography";

const faqs = [
  {
    question: "What is Brothas Express?",
    answer:
      "Brothas Express is a reflective conversation space to redefine thriving manhood for Black men.",
  },
  {
    question: "How can I join Brothas Express?",
    answer:
      'You can join by clicking the "Join" button on our homepage and filling out the registration form.',
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Members gain access to exclusive content, community events, and a supportive network of like-minded individuals.",
  },
];

const FAQSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="primary" textAlign="center">
              Frequently Asked Questions
            </MKTypography>
            <MKTypography variant="body2" color="white" textAlign="center" opacity={0.8}>
              {"We got answers"}
            </MKTypography>
          </Grid>
        </Grid>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;
