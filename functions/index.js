
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');
admin.initializeApp();

exports.newAccountCreated = functions.auth.user().onCreate((user) => {
  userDoc = {'email': user.email}
  admin.firestore().collection('users').doc(user.uid)
.set(userDoc).then(writeResult => {
    console.log('User Created result:', writeResult);
    return;
}).catch(err => {
   console.log(err);
   return;
});
});

const WEBHOOK_URL = 'https://discord.com/api/webhooks/867193228108365864/4-_OxlP6rVP_3OTrFk6BrZRVn1ak-tWwUXf3LIjAs_b8HCC7Nb19g6lkEy1HV8kUoGcr';

exports.narviWebhook = functions.firestore.document('characters/{id}').onUpdate( async (change, content) => {
  functions.logger.log("Change:",change.after.data())
  body = {
    username: "Blackroot",
    content: change.after.id
  }
  return response = await fetch(WEBHOOK_URL, {
    method: 'post',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
})