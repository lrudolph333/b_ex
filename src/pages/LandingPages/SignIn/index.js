import { Box, Card, Grid, Switch } from "@mui/material";
import bgImage from "assets/images/landing2.png";
import theme from "assets/theme";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SimpleFooter from "pages/Home/components/SimpleFooter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import { auth, sendSignInLinkToEmail } from "../../../firebaseConfig"; // adjust the path as necessary
function SignInBasic() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [city, setCity] = useState("");
  const [birthday, setBirthday] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState(false);
  const [subscribeText, setSubscribeText] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("theme: " + theme.palette.primary.main);
    console.log("window: " + window.location.origin);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user: " + user);
        navigate("/home"); // Navigate to /home if user is authenticated
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // const navigate = useNavigate();

  const handleSetSubscribeText = () => setSubscribeText(!subscribeText);
  const handleSetSubscribeEmail = () => setSubscribeEmail(!subscribeEmail);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (reason.length < 50) {
      alert("Please give us at least 50 characters on why you want to join.");
      return;
    }
    // const emailQuery = query(collection(firestore, "users"), where("email", "==", email));
    // const querySnapshot = await getDocs(emailQuery);

    // if (!querySnapshot.empty) {
    //   alert("This email is already in use.");
    //   return;
    // }

    const actionCodeSettings = {
      // Pass state via continue URL
      url: `${window.location.origin}/finishSignUp?email=${encodeURIComponent(
        // url: `https://brothas.express/finishSignUp?email=${encodeURIComponent(
        email
      )}&phone=${encodeURIComponent(phone)}&name=${encodeURIComponent(
        name
      )}&reason=${encodeURIComponent(reason)}&city=${encodeURIComponent(
        city
      )}&birthday=${encodeURIComponent(
        birthday
      )}&subscribeEmail=${subscribeEmail}&subscribeText=${subscribeText}`,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Verification email sent! Check your inbox (and spam).");
    } catch (error) {
      console.error("Error sending email: ", error);
      alert("Error sending verification email. Please try again.");
    }
  };

  return (
    <Box height="100%" bgColor={"#73020C"}>
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
                color: "primary",
              }
        }
        sticky
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        // zIndex={1}
        width="100%"
        minHeight="100vh"
        bgColor={"dark"}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box height={"10vh"}></Box>
      <MKBox mt={6} px={1} width="100%" mx="auto" position="relative">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                // variant="gradient"
                // bgColor={"dark"}
                bgColor={theme.palette.primary.main}
                borderRadius="lg"
                coloredShadow="dark"
                mx={2}
                mt={-2}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  bgColor={theme.palette.primary.main}
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Join Brothas Express
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={handleFormSubmit}>
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="phone"
                      label="Phone"
                      fullWidth
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Name"
                      fullWidth
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="textarea"
                      label="Why do you want to join?"
                      fullWidth
                      multiline
                      rows={3}
                      required
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    <MKBox display="flex" justifyContent="end">
                      <MKTypography
                        variant="caption"
                        sx={{
                          // position: "absolute",
                          bottom: 0,
                          right: 0,
                          padding: "0.5rem",
                        }}
                      >
                        {reason.length + "/50"}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKBox mb={0}>
                    <MKInput
                      type="text"
                      label="City"
                      fullWidth
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKBox mb={-2} ml={1.7} zIndex={2} fontWeight={"bold"}>
                      <MKTypography variant="overline">Birthday</MKTypography>
                    </MKBox>
                    <MKInput
                      type="date"
                      fullWidth
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                    <MKBox>
                      <MKTypography variant="overline">
                        Used to show your age in community spaces
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={subscribeText} onChange={handleSetSubscribeText} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetSubscribeText}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Subscribe to text updates (cancel at any time)
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={subscribeEmail} onChange={handleSetSubscribeEmail} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetSubscribeEmail}
                      sx={{
                        cursor: "pointer",
                        userSelect: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      &nbsp;&nbsp;Subscribe to&nbsp;
                      <MKTypography
                        component="a"
                        href="https://brothas-express.beehiiv.com/"
                        target="_blank"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",
                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },
                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        newsletter
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton color="primary" fullWidth type="submit">
                      Submit
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox bgColor={"dark"} py={2} px={1} mt={2} width="100%">
        <SimpleFooter light />
      </MKBox>
    </Box>
  );
}

export default SignInBasic;
