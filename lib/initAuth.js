import './firebase'
import { init } from 'next-firebase-auth'

// ...initAuth as shown in the example, but with only the apiKey for firebaseClientInitConfig

const initAuth = () => {
    init({
      authPageURL: '/auth',
      appPageURL: '/',
      loginAPIEndpoint: '/api/login', // required
      logoutAPIEndpoint: '/api/logout', // required
      // Required in most cases.
      firebaseAdminInitConfig: {
        credential: {
          projectId: 'tengwar-tools',
          clientEmail: 'firebase-adminsdk-qbpmk@tengwar-tools.iam.gserviceaccount.com',
          // The private key must not be accesssible on the client side.
          privateKey: process.env.FIREBASE_PRIVATE_KEY
        },
        databaseURL: 'https://tengwar-tools.firebaseio.com',
      },
      firebaseClientInitConfig: {
        apiKey: 'AIzaSyD2OfB1hpXcKpMy4LCCVQ40SeOAEUGdkMI',
        authDomain: 'tengwar-tools.firebaseapp.com',
        databaseURL: 'https://tengwar-tools.firebaseio.com',
        projectId: 'tengwar-tools', // required
      },
      cookies: {
        name: 'Tengwar Tools', // required
        // Keys are required unless you set `signed` to `false`.
        // The keys cannot be accessible on the client side.
        keys: [
          process.env.COOKIE_SECRET_CURRENT,
          process.env.COOKIE_SECRET_PREVIOUS,
        ],
        httpOnly: true,
        maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
        overwrite: true,
        path: '/',
        sameSite: 'strict',
        secure: true, // set this to false in local (non-HTTPS) development
        signed: false,
      },
    })
    console.log("got here")
  }

  
  export default initAuth