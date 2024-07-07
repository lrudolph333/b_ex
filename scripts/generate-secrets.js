const fs = require("fs");
const path = require("path");

// Load the full credentials.json
const keyPath = path.join(__dirname, "credentials.json");
const credentials = JSON.parse(fs.readFileSync(keyPath));

// Extract the required keys
const { client_id, client_secret, redirect_uris } = credentials.installed;

// Print them in a ready-to-use format for Firebase secrets
console.log(`firebase functions:secrets:set client_id "${client_id}"`);
console.log(`firebase functions:secrets:set client_secret "${client_secret}"`);
console.log(`firebase functions:secrets:set redirect_uri "${redirect_uris[0]}"`);
