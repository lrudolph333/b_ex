import { Box, Card, CircularProgress, Grid, Switch } from "@mui/material";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import SimpleFooter from "examples/Footers/SimpleFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import {
  auth,
  collection,
  doc,
  firestore,
  getDocs,
  isSignInWithEmailLink,
  query,
  sendSignInLinkToEmail,
  setDoc,
  signInWithEmailLink,
  where,
} from "../../../firebaseConfig"; // adjust the path as necessary

function SignInBasic() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [city, setCity] = useState("");
  const [birthday, setBirthday] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState(false);
  const [subscribeText, setSubscribeText] = useState(false);
  const [isSendingLink, setIsSendingLink] = useState(false);
  const navigate = useNavigate();

  const handleSetSubscribeText = () => setSubscribeText(!subscribeText);
  const handleSetSubscribeEmail = () => setSubscribeEmail(!subscribeEmail);

  const handleFormSubmit = async (event) => {
    setIsSendingLink(true);
    {
      /** TODO show spinny shit while email link is sending */
    }
    event.preventDefault();

    const emailQuery = query(collection(firestore, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(emailQuery);

    if (!querySnapshot.empty) {
      alert("This email is already in use.");
      return;
    }

    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };

    try {
      // await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      // window.localStorage.setItem("emailForSignIn", email);
      // alert("Verification email sent! Check your inbox.");
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem("emailForSignIn", email);
          alert("Verification email sent! Check your inbox.");
          setIsSendingLink(false);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error: " + errorMessage);
          setIsSendingLink(false);

          // ...
        });
    } catch (error) {
      console.error("Error sending email: ", error);
      setIsSendingLink(false);
      alert("Error sending verification email. Please try again.");
    }
  };

  const handleMagicLinkSignIn = async () => {
    const emailForSignIn = window.localStorage.getItem("emailForSignIn");
    if (!emailForSignIn || !isSignInWithEmailLink(auth, window.location.href)) {
      return;
    }

    try {
      const result = await signInWithEmailLink(auth, emailForSignIn, window.location.href);
      window.localStorage.removeItem("emailForSignIn");

      const userDocRef = doc(firestore, "users", result.user.uid);
      await setDoc(userDocRef, {
        email: result.user.email,
        phone: phone || null,
        name: name || null,
        reason: reason || null,
        city: city || null,
        birthday: birthday || null,
        subscribeEmail: subscribeEmail,
        subscribeText: subscribeText,
      });

      alert("Sign-in successful!");
      navigate("/home"); // Redirect to the dashboard or desired page
    } catch (error) {
      console.error("Error signing in with email link: ", error);
      alert("Error signing in. Please try again.");
    }
  };

  useEffect(() => {
    console.log("window: " + window.location.href);
    handleMagicLinkSignIn();
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/join",
          label: "Join",
          color: "primary",
        }}
        sticky
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
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
      <MKBox mt={6} px={1} width="100%" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="primary"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-2}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
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
                    {/** make this required at least 60 characters */}

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
                    {!isSendingLink ? (
                      <MKButton variant="gradient" color="primary" fullWidth type="submit">
                        Join
                      </MKButton>
                    ) : (
                      <CircularProgress alignItems="center"></CircularProgress>
                    )}
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox py={3} px={1} mt={6} width="100%">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
