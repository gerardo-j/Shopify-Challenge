import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'shopify-challenge-1c592',//.replace(/\\n/g, '\n'),//process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.CLIENT_EMAIL,
        // The private key must not be accesssible on the client side.
        privateKey: process.env.PRIVATE_KEY
      }
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyCWJjqP0Syy4Ehwd8huhDG-D9XPWn1RhYw',//process.env.FIREBASE_API_KEY, // required
      authDomain: 'shopify-challenge-1c592.firebaseapp.com',
      databaseURL: 'shopify-challenge-1c592.firebaseapp.com',
      projectId: 'shopify-challenge-1c592',
    },
    cookies: {
      name: 'ImageManager', // required
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
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth