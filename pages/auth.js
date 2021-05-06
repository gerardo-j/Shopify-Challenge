import FirebaseAuth from '../components/Firebase/FirebaseAuth'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const auth = () => {
    return (
        <div>
            <FirebaseAuth />
            <Link href="/"><a className={styles.container}> Go Home?</a></Link>            
        </div>
    )
}

export default auth
