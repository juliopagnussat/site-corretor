import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julio Cezar Pagnussat</title>
        <meta name="description" content="Corretor de Imóveis em Chapecó - SC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <img className="foto-perfil" src="https://raw.githubusercontent.com/juliopagnussat/site-corretor/main/public/images/perfil-corretor.jpeg" width="100px" height="100px"/>
        </div>
        <h2>Julio Cezar Pagnussat</h2>
        <h3>Corretor de Imóveis<p>CRECI 37034</p></h3>
        <p></p>
        <div className="redes-sociais">
        <a className="rede" href="http://bit.ly/whats_juliopagnussat"><i className="bi bi-whatsapp"></i>Whatsapp</a>
        <a className="rede" href="http://instagram.com/corretorjuliopagnussat"><i className="rede bi bi-instagram"></i>Instagram</a>
        <a className="rede" href="http://youtube.com/juliopag"><i className="bi bi-youtube"></i>Youtube</a>
        </div>        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
