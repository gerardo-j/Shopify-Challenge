import FirebaseLogin from '../components/FirebaseLogin'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Wrapper from "../components/Wrapper"
import { AuthAction, withAuthUser } from 'next-firebase-auth'

const Login = () => {
    return (
        <>
            <Wrapper title="Login">
                <h1 className={styles.title}>
                    Welcome to the <a href="/">Image Manager!</a>
                </h1>
                <p className={styles.description}>
                    <Link href="/login"><a>Sign in to get started</a></Link>
                </p>
                <FirebaseLogin/>
            </Wrapper>
        </>
    )
}

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Login)
