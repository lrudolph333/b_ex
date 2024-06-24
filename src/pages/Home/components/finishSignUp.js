import MKBox from "components/MKBox";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  auth,
  doc,
  firestore,
  isSignInWithEmailLink,
  setDoc,
  signInWithEmailLink,
} from "../../../firebaseConfig"; // adjust the path as necessary
import DefaultInfoCard from "./DefaultInfoCard";

const FinishSignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleMagicLinkSignIn = async () => {
      const searchParams = new URLSearchParams(location.search);
      const email = searchParams.get("email");
      const phone = searchParams.get("phone");
      const name = searchParams.get("name");
      const reason = searchParams.get("reason");
      const city = searchParams.get("city");
      const birthday = searchParams.get("birthday");
      const subscribeEmail = searchParams.get("subscribeEmail") === "true";
      const subscribeText = searchParams.get("subscribeText") === "true";

      if (!email || !isSignInWithEmailLink(auth, window.location.href)) {
        console.error("Invalid or missing email.");
        return;
      }

      try {
        const result = await signInWithEmailLink(auth, email, window.location.href);

        try {
          const userDocRef = doc(firestore, "users", result.user.uid);
          await setDoc(userDocRef, {
            email: String(result.user.email), // Ensure email is of type string
            phone: phone ? String(phone) : null, // Ensure phone is of type string or null
            name: name ? String(name) : null, // Ensure name is of type string or null
            reason: reason ? String(reason) : null, // Ensure reason is of type string or null
            city: city ? String(city) : null, // Ensure city is of type string or null
            birthday: birthday ? new Date(birthday) : null, // Ensure birthday is of type Date or null
            subscribeEmail: subscribeEmail,
            subscribeText: subscribeText,
            createdAt: Date.now(),
          });
        } catch (error) {
          console.error("error adding doc: " + error);
        }

        alert("Sign-in successful!");
        navigate("/home"); // Redirect to the dashboard or desired page
      } catch (error) {
        console.error("Error signing in with email link: ", error);
        if (error.message.includes("invalid-action-code")) {
          alert("This can happen if the code has already been used.");
        } else if (error.message.includes("expired-action-code")) {
          alert("This auth code has expired. Please request a new one.");
        } else {
          alert("Error signing in. Please try again.");
        }
      }
    };

    handleMagicLinkSignIn();
  }, [location.search, navigate]);

  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={4}
      p={4}
      minHeight={"30vh"}
    >
      <DefaultInfoCard
        m={4}
        width={"50%"}
        direction={"center"}
        icon="public"
        title="Completing Sign-up"
        description="You will be redirected soon, hang tight..."
      />
    </MKBox>
  );
};

export default FinishSignUp;
