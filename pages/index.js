import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useUser } from '../firebase/useUser'
import Dashboard from '../components/Dashboard'

export default function Home() {
  const { user, logout } = useUser()
  if (user) {
    return <Dashboard/>
  }

  else return (
    <div className={styles.container}>
      <Head>
        <title>Image Manager</title>
        <meta name="description" content="Manage your images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="/">Image Manager!</a>
        </h1>

        <p className={styles.description}>
        <Link href="/auth"><a>Click here to get started</a></Link>
        </p>
      </main>
    </div>
  )
}
