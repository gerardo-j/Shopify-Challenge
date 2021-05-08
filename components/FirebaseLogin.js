import initAuth from '../initAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { getFirebaseClient } from 'next-firebase-auth'
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
            try {
                const data = {
                    name: user.displayName,
                    balance: 250,
                    inventory: [], 
                    total_inventory: 0,
                    total_sales: 0,
                    total_bought: 0,
                }
                const doc = await getFirebaseClient().firestore().collection('user').doc(user.uid)
                await doc.set( data, { merge: true })
                window.location.assign('/')
                return false
            } catch(e) {
                console.error("Error adding document: ", e);
                window.location.assign('/')
                return false
            }
          }
    },
}

const FirebaseLogin = () => {
    initAuth()
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