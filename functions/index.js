const { google } = require("googleapis");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const textmagicClient = require("textmagic-client");
const path = require("path");
const fs = require("fs");

admin.initializeApp();

const client = textmagicClient.ApiClient.instance;
const auth = client.authentications["BasicAuth"];
const api = new textmagicClient.TextMagicApi();

// TextMagic credentials
auth.username = "YOUR_USERNAME";
auth.password = "YOUR_API_KEY";

// Load OAuth2 credentials
const keyPath = path.join(__dirname, "credentials.json");
let keys = { redirect_uris: [""] };
if (fs.existsSync(keyPath)) {
  keys = JSON.parse(fs.readFileSync(keyPath)).installed;
}

// Create an oAuth2 client to authorize the API call
const oAuth2Client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

// Add your refresh token here
oAuth2Client.setCredentials({
  refresh_token: "YOUR_REFRESH_TOKEN",
});

// Function to share calendar with a user
async function shareCalendarWithUser(calendarId, email) {
  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

  try {
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
  } catch (error) {
    console.error(`Error sharing calendar with ${email}:`, error);
  }
}

exports.addUserToTextMagicAndCalendar = functions.firestore
  .document("/users/{userId}")
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const phone = userData.phone;
    const email = userData.email;

    if (!phone) {
      console.log("No phone field found in new user document.");
      return null;
    }

    // Add user to TextMagic
    const input = {
      phone: phone,
      lists: "YOUR_CONTACT_LIST_ID", // Replace with your TextMagic contact list ID for "members"
      firstName: userData.name || "",
      lastName: "",
      email: email || "",
      companyName: "",
      favorited: false,
      blocked: false,
      type: 1,
      local: 0,
      country: "US",
    };

    try {
      const data = await api.createContact(input);
      console.log(`Successfully added ${phone} to TextMagic. Response:`, data);
    } catch (err) {
      console.error(`Error adding ${phone} to TextMagic:`, err);
    }

    // Add user to Google Calendar
    if (email) {
      await shareCalendarWithUser("YOUR_CALENDAR_ID", email); // Replace with your Google Calendar ID
    }

    return null;
  });
