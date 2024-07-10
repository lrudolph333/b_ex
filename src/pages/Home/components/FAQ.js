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
import Fade from "@mui/material/Fade";
import MKTypography from "components/MKTypography";

const faqs = [
  // {
  //   question: "What is Brothas Express?",
  //   answer:
  //     "Brothas Express is an online reflective conversation space to redefine thriving manhood for Black men.",
  // },
  {
    question: "How do I join Brothas Express?",
    answer:
      'You can join by clicking the "Sign Up" button on our homepage and filling out the registration form. This will give you unlimited access to all components of our online community, including the Nexus and the Library.',
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Members gain access to exclusive community spaces, and a supportive network of individuals on the same journey.",
  },
  {
    question: "What inspired the creation of Brothas Express? ",
    answer:
      "We feel like Black men don't have enough channels to deeply unpack the toxic lessons patriarchal society ingrains in us." +
      " Everyday destructive masculine ideals are celebrated on full-display, encouraging us to embrace self-destructive behaviors and attitudes." +
      " \n\nWe want to change that.",
  },
  {
    question: "How do I join the virtual discussion each week?",
    answer:
      "After joining Brothas Express on our website, the homepage will have a button to 'Enter the Express Nexus'." +
      " \nThis will take you to our online community forum, which contains a voice channel. Click on the voice channel during our weekly meeting time, and you're in!",
  },
  {
    question: "What is 'Express Nexus'?",
    answer:
      "Express Nexus is an online forum for us to connect, share advice, share a laugh, hop in virtual meeting spaces, and build a sense of community. " +
      " It is hosted on Discord, which provides helpful features and easy functionality to create our space.",
  },
  {
    question: "What does a typical Brothas Express discussion look like?",
    answer:
      "Our virtual (in-person on the way!) discussions last 60-90 minutes and follow the same format. We start by briefly expressing current challenges and victorys in our life. " +
      " \nThen we watch/read/listen to a curated piece of content to introduce a particular theme. " +
      " \nFrom there we facilitate an intentional discussion to explore how this issue manifests in our lives, what affects it has, and how we can unsubscribe from the damage it may cause. " +
      "\nLastly, all present members commit to one action or change of behavior for the next week and beyond, in light of the conversation had. ",
  },
  {
    question: "How does Brothas Express ensure a safe discussion space?",
    answer:
      "We have created simple, specific discussion rules to help foster a constructive, respectful space. More details can be found in our Library's homepage. In no particular order, these rules are: " +
      ' \n1.) Speak from the "I" perspective ' +
      " \n2.) Respect other's truth " +
      " \n3.) Don't use names " +
      " \n4.) Be vulnerable ",
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
    answer:
      "Understandable. If you won't make time for the weekly discussion space, there is still great value in joining Express Nexus, and digesting content from our Library.",
  },
  {
    question: "Does Brothas Express collaborate with other organizations?",
    answer:
      "While we do pull content from other organizations exploring masculinity and Blackness, we are not currently in long-term partnership with anyone. " +
      " We do partner with organizations for one-off or occasional collab events. If this interests you, please reach out to us via email or IG.",
  },
  {
    question: "How much does it cost to particpate?",
    answer:
      "Monetarily, everything is free of charge. This is purely a sacrifice of your time and energy.",
  },

  {
    question:
      "How does Brothas Express handle confidentiality and privacy concerns within the discussion group?",
    answer:
      "While there are no contracts to be signed, members are expected to respect the confidentiality of others, and keep vulnerable information within the community. " +
      " Each individual chooses how much trust to give to other members, and should only share what they feel comfortable sharing. ",
  },
  {
    question: "I'm not Black or male. How can I participate?",
    answer:
      "Yes. While we want to keep the online spaces exclusive to Black men, we invite anyone to browse our Library, tap-in with our social networks, and spread the word to others.",
  },
  {
    question: "I'm not Black or male. How can I support the mission?",
    answer:
      "Tap in with our socials and spread the word to others, as we are looking to grow via word of mouth. " +
      " For bonus points, take time to browse our Library and educate yourself on some of the topics we are discussing in-depth.",
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
            <MKTypography variant="body2" color="text" textAlign="center" opacity={0.8}>
              {"We got answers."}
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
