import { init } from 'next-firebase-auth'

// ...initAuth as shown in the example, but with only the apiKey for firebaseClientInitConfig

const initAuth = () => {
    
    init(
      {
      authPageURL: '/auth',
      appPageURL: '/',
      loginAPIEndpoint: '/api/login', // required
      logoutAPIEndpoint: '/api/logout', // required
      // firebaseAuthEmulatorHost: 'localhost:9099',
      // Required in most cases.
      firebaseAdminInitConfig: {
        credential: {
          projectId: 'blackroot-vale',
          clientEmail: 'firebase-adminsdk-d7xvy@blackroot-vale.iam.gserviceaccount.com',
          // The private key must not be accesssible on the client side.
          privateKey: process.env.FIREBASE_PRIVATE_KEY
        },
        databaseURL: 'https://blackroot-vale.firebaseio.com',
      },
      firebaseClientInitConfig: {
        apiKey: 'AIzaSyBgOam77pyQ3Hid17yEIUbFv-l_oyIBSOE',
        authDomain: 'blackroot-vale.firebaseapp.com',
        databaseURL: 'https://blackroot-vale.firebaseio.com',
        projectId: 'blackroot-vale', // required
      },
      cookies: {
        name: 'Blackroot', // required
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
  }

  
  export default initAuth