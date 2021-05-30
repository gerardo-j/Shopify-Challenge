import initAuth from '../initAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';  // This is very important
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useEffect, useState } from 'react'

const FirebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        }
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }) =>  {
            await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/createUser`, {
                method: 'GET',
                headers: {
                    userid: user.uid,
                    displayname: user.displayName
                },
            })
            return false; 
          }
    },
}

initAuth()
const FirebaseLogin = () => {
    const [renderAuth, setRenderAuth] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    return (
        <>
            {
                renderAuth ? <StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={firebase.auth()}/> : null
            }
        </>
    )
}

export default FirebaseLogin