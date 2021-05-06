import initFirebase from '../../firebase/initFirebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import { setUserCookie } from '../../firebase/userCookies'
import { mapUserData } from '../../firebase/mapUserData'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useEffect, useState} from 'react'

initFirebase()

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
        signInSucessWithAuthResult: async ( {user}, redirectUrl ) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        } 
    }
}

const FirebaseAuth = () => {
    const [renderAuth, setRenderAuth] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    return (
        <div>
            {
                renderAuth ? <StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={firebase.auth()}/> : null
            }
        </div>
    )
}

export default FirebaseAuth