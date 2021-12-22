import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julio Cezar Pagnussat</title>
        <meta name="description" content="Corretor de Imóveis em Chapecó - SC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Image src="/public/images/perfil-corretor.jpeg" width={100} height={100} />
        <h1>Julio Cezar Pagnussat</h1>
        <h3>Consultor Imobiliário<p>CRECI 37034</p></h3>
        <p></p>
        <p></p>
            <div className="wrapper">
              <div className="icon whatsapp">
                <div className="tooltip">Whatsapp</div>
                <span><a href="http://bit.ly/whats_juliopagnussat"><i className="bi bi-whatsapp"></i></a></span>
              </div>
              <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><a href="http://facebook.com/juliopagnussatcorretor"><i className="bi bi-facebook"></i></a></span>
              </div>
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><a href="http://instagram.com/corretorjuliopagnussat"><i className="bi bi-instagram"></i></a></span>
              </div>
              <div className="icon youtube">
                <div className="tooltip">Youtube</div>
                <span><a href="http://youtube.com/juliopag"><i className="bi bi-youtube"></i></a></span>
              </div>
            </div>
      </main>
      
      <footer className="footer">
          <div className="text-footer">
            <h2>Corretor de Imóveis</h2>
            <p></p>
            <a href="http://www.alternativachapeco.com.br">www.alternativachapeco.com.br</a>
          </div>
      </footer>
    </div>
  )
}
