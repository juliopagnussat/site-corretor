import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FotoPerfil from '../public/images/perfil-corretor.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julio Cezar Pagnussat</title>
        <meta name="description" content="Corretor de Imóveis em Chapecó - SC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="banner">
          <div className="max-width">
            <div className="top-content">
              <img src={ FotoPerfil } alt="" />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
