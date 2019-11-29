const functions = require('firebase-functions')

const mailform = require('./mailform')
exports.mailform = functions.https.onRequest(mailform)
