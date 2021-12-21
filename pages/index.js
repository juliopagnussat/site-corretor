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
        <h1>Bem vindo!</h1>
        <h2>Julio Cezar Pagnussat</h2>
        <h3>Corretor de Imóveis<p>CRECI 37034</p></h3>
        <p></p>
        <div className="redes-sociais">
        <a href="http://bit.ly/whats_juliopagnussat"><i className="bi bi-whatsapp"></i>Whatsapp</a>
        <a href="http://instagram.com/corretorjuliopagnussat"><i className="bi bi-instagram"></i>Instagram</a>
        <a href="http://youtube.com/juliopag"><i className="bi bi-youtube"></i>Youtube</a>
        </div>        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
