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
        <div className="redes-sociais">
        <a href="http://bit.ly/whats_juliopagnussat"><i className="bi bi-whatsapp"></i></a>
        <a href="http://instagram.com/corretorjuliopagnussat"><i className="bi bi-instagram"></i></a>
        <a href="http://youtube.com/juliopag"><i className="bi bi-youtube"></i></a>
        </div>        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
