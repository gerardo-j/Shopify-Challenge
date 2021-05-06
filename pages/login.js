import FirebaseLogin from '../components/Firebase/FirebaseLogin'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const auth = () => {
    return (
        <>
            <FirebaseLogin />
            <Link href="/"><a className={styles.container}> Go Home?</a></Link>            
        </>
    )
}

export default auth
