import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navgator from '../components/Navgator'
import Jumbotron from '../components/Jumbotron'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carvalho e Marcelino</title>
        <meta name="description" content="Site do escritório Carvalho e Marcelino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navgator></Navgator>
        <Jumbotron></Jumbotron>
      </header>
      <main className={styles.main}>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
