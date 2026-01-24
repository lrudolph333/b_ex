import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import MKTypography from "components/MKTypography";

const faqs = [
  {
    question: "What inspired the creation of brothas express? ",
    answer:
      "We feel like Black men don't have enough channels to deeply unpack the toxic lessons patriarchal society ingrains in us." +
      " Everyday destructive masculine ideals are celebrated on full-display, encouraging us to embrace self-destructive behaviors and attitudes." +
      " \n\nWe want to change that.",
  },
  {
    question: "Is there a virtual option to join?",
    answer:
      "No, we are fully in person community as of today. If you want us to come to your city, school, or organization please reach out to us via Instagram.",
  },
  {
    question: "Are there any requirements or expectations to participate in discussions?",
    answer: "Nope. Come as you are, whenever you can.",
  },
  {
    question: "I'm very ignorant on many things. Is this discussion space for me?",
    answer:
      "Absolutely. We do not care how much feminist literature you have or haven't read. We are all committed to growing in the same direction, no matter where you are starting from.",
  },

  {
    question: "Is this only for Black men? Can women/non-binary join? Can other races join?",
    answer:
      "We want to cultivate a space where members share the same experience of being raise male and being raise Black." +
      " Therefore, we welcome anyone who identifies with the unique experience of being Black and male, which can include mixed-race and non-binary individuals.",
  },
  {
    question: "Are you making any money from this?",
    answer: "nope, losing money actually.",
  },
  {
    question: "I'm too busy to ever join the weekly discussion space. What should I do?",
    answer: (
      <>
        Understandable. If you won&apos;t make time for the weekly discussion space, there is still
        great value in following our socials, and exploring our{" "}
        <Link
          href="https://brothas-express.notion.site/Brothas-Express-Library-5bf8e9d563014258bf168224f99bb553"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.main",
            textDecoration: "underline",
          }}
        >
          Library
        </Link>
        .
      </>
    ),
  },
  {
    question: "Does brothas express collaborate with other organizations?",
    answer:
      "While we do pull content from other organizations exploring masculinity and Blackness, we are not currently in long-term partnership with anyone. " +
      " We do partner with organizations for one-off or occasional collab events. If this interests you, please reach out to us via Instagram.",
  },
  {
    question: "How much does it cost to particpate?",
    answer:
      "Monetarily, everything is free of charge. This is purely a sacrifice of your time and energy.",
  },

  {
    question:
      "How does brothas express handle confidentiality and privacy concerns within the discussion group?",
    answer:
      "While there are no contracts to be signed, members are expected to respect the confidentiality of others, and keep vulnerable information within the community. " +
      " Each individual chooses how much trust to give to other members, and should only share what they feel comfortable sharing. ",
  },
  {
    question: "I'm not Black or male. How can I participate?",
    answer: (
      <>
        Yes. While this space is exclusive to Black men, we invite anyone to browse our{" "}
        <Link
          href="https://brothas-express.notion.site/Brothas-Express-Library-5bf8e9d563014258bf168224f99bb553"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", textDecoration: "underline" }}
        >
          Library
        </Link>
        , tap-in with our social networks, and spread the word to others.
      </>
    ),
  },
  {
    question: "I'm not Black or male. How can I support the mission?",
    answer: (
      <>
        Tap in with our socials and spread the word to others, as we are looking to grow via word of
        mouth. For bonus points, take time to browse our{" "}
        <Link
          href="https://brothas-express.notion.site/Brothas-Express-Library-5bf8e9d563014258bf168224f99bb553"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.main",
            textDecoration: "underline",
          }}
        >
          Library
        </Link>{" "}
        and educate yourself on some of the topics we are discussing in-depth.
      </>
    ),
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
          </Grid>
        </Grid>
        {faqs.map((faq, index) => (
          <Accordion
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              padding: "3px",
              margin: "10px",
              borderTopColor: "transparent",
              borderRadius: "15px",
            }}
            key={index}
            id={`faq-${index}`}
          >
            <AccordionSummary
              sx={{
                paddingLeft: "10px",
                borderTopColor: "transparent",
                borderRadius: "15px",
              }}
              expandIcon={<ExpandMoreIcon />}
              // mx={5}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={{}}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;
