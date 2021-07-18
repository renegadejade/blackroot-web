const functions = require('firebase-functions');
const admin = require('firebase-admin')
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

