const functions = require('firebase-functions')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const mailform = require('./mailform')
exports.mailform = functions.https.onRequest(mailform)
