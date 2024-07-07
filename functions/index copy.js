const { google } = require("googleapis");
const functions = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();

const { onDocumentCreated } = require("firebase-functions/v2/firestore");

exports.subscribeuser = onDocumentCreated(
  "/users/{userId}",
  {
    secrets: ["CLIENT_ID", "CLIENT_SECRET", "REDIRECT_URL", "OAUTH_ACCESS_TOKEN"],
  },
  async (event) => {
    const userData = event.data.data();
    const email = userData.email;

    // Initialize OAuth2 Client with secrets
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URL
    );

    // Set the credentials using the OAuth access token
    oAuth2Client.setCredentials({
      refresh_token: process.env.OAUTH_ACCESS_TOKEN,
    });

    const calendarId = "brothasexpress@gmail.com"; // Replace with your actual calendar ID

    if (email) {
      try {
        const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
        const response = await calendar.acl.insert({
          calendarId: calendarId,
          resource: {
            role: "reader", // or 'writer', 'owner'
            scope: {
              type: "user",
              value: email,
            },
          },
        });
        console.log(`Successfully shared calendar with ${email}. Response:`, response.data);
        return {
          status: "success",
          message: `Successfully shared calendar with ${email}`,
        };
      } catch (error) {
        console.error(`Error sharing calendar with ${email}:`, error);
        return {
          status: "error",
          message: `Error sharing calendar with ${email}`,
          error: error,
        };
      }
    } else {
      return {
        status: "error",
        message: "Email parameter is missing",
      };
    }
  }
);
