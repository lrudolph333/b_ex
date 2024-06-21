const { google } = require("googleapis");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addUserToTextMagicAndCalendar = functions
  .runWith({ secrets: ["CLIENT_ID", "CLIENT_SECRET", "REDIRECT_URL", "OAUTH_ACCESS_TOKEN"] })
  .firestore.document("/users/{userId}")
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const email = userData.email;
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URL
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.OAUTH_ACCESS_TOKEN,
    });

    const calendarId = "brothasexpress@gmail.com";

    if (email) {
      try {
        const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
        const response = await calendar.acl.insert({
          calendarId,
          resource: {
            role: "reader",
            scope: {
              type: "user",
              value: email,
            },
          },
        });
        console.log(`Successfully shared calendar with ${email}. Response:`, response.data);
      } catch (error) {
        console.error(`Error sharing calendar with ${email}:`, error);
      }
    }
  });
