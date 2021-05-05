import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/ useUser'

export default function Home() {
  const { user, logout } = useUser()
  console.log(user)
  if (user) {
    return (
      <>
        <h1>{ user.name }</h1>
        <h3>{ user.email }</h3>
        <button onClick={() => logout()}>Logout</button>
      </>
    )
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
          Get started by signing in{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
