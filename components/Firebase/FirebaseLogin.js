import initFirebase from '../../firebase/initFirebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useEffect, useState} from 'react'

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
}

const FirebaseLogin = () => {
    initFirebase()
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