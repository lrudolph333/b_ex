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
  {
    question: "What inspired the creation of Brothas Express, and why is it important? ",
    answer: "no and yes",
  },
  {
    question:
      " What does a typical Brothas Express discussion look like, and what can I expect if I join?",
    answer: "no and yes",
  },
  {
    question:
      "How does Brothas Express ensure a safe and respectful discussion space for all participants?",
    answer: "no and yes",
  },
  {
    question:
      "Are there any requirements or expectations for individuals who wish to participate in Brothas Express discussions?",
    answer: "no and yes",
  },
  {
    question:
      "Can someone outside of the Black community benefit from or contribute to Brothas Express?",
    answer: "no and yes",
  },
  {
    question: "Is this only for Black men? Can women/non-binary join?",
    answer: "no and yes",
  },
  {
    question: "I'm too busy to ever join the weekly discussion space. What should I do?",
    answer: "no and yes",
  },
  {
    question:
      "Does Brothas Express collaborate with other organizations or communities, and if so, how?",
    answer: "no and yes",
  },
  {
    question:
      "Are there any costs associated with participating in Brothas Express discussions or events?",
    answer: "no and yes",
  },
  {
    question:
      "How can I contribute to or support the mission of Brothas Express if I cannot participate in discussions?",
    answer: "no and yes",
  },
  {
    question:
      "How does Brothas Express handle confidentiality and privacy concerns within the discussion group?",
    answer: "no and yes",
  },
  {
    question: "I'm  kind of ignorant on many things. Is this discussion space for me?",
    answer: "no and yes",
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
          <Accordion sx={{ padding: "3px", margin: "3px" }} key={index}>
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
