import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dumbo Incorporated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#ads">Ads</a>
      <a href="#login">Login</a>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to THIS DUMPSTERFIRE 
        </h1>
      </main>
    </div>
  )
}
