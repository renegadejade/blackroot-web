// pages/example.js

import {
    useAuthUser,
    withAuthUser,
    AuthAction,
    withAuthUserTokenSSR,
  } from 'next-firebase-auth'
  import db from '../lib/firestore'
  import admin from '../lib/admin'
  
  function Editor({ message }) {
    const AuthUser = useAuthUser()
  
    return (
      <textarea
        defaultValue={message}
        onChange={({ currentTarget: { value } }) =>
          db.collection('messages').doc(AuthUser.id).set({ message: value })
        }
      />
    )
  }
  
  export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  })(async ({ AuthUser }) => {
    const db = admin.firestore()
    const doc = await db.collection('messages').doc(AuthUser.id).get()
    return { message: doc.exists ? doc.data().message : '...' }
  })
  
  export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  })(Editor)