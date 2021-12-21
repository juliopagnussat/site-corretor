import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julio Cezar Pagnussat</title>
        <meta name="description" content="Corretor de Imóveis em Chapecó - SC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem vindo!</h1>
        <p></p>
        <i class="fab fa-whatsapp"></i>
                
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
