import Head from 'next/head'
import YouTube from 'react-youtube';

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
        <h1>Julio Cezar Pagnussat</h1>
        <h3>Consultor Imobiliário<p>CRECI 37034</p></h3>
        <p></p>
        <p></p>
            <div class="wrapper">
              <div class="icon whatsapp">
                <div class="tooltip">Whatsapp</div>
                <span><a href="http://bit.ly/whats_juliopagnussat"><i class="bi bi-whatsapp"></i></a></span>
              </div>
              <div class="icon facebook">
                <div class="tooltip">Facebook</div>
                <span><a href="http://facebook.com/juliopagnussatcorretor"><i class="bi bi-facebook"></i></a></span>
              </div>
              <div class="icon instagram">
                <div class="tooltip">Instagram</div>
                <span><a href="http://instagram.com/corretorjuliopagnussat"><i class="bi bi-instagram"></i></a></span>
              </div>
              <div class="icon youtube">
                <div class="tooltip">Youtube</div>
                <span><a href="http://youtube.com/juliopag"><i class="bi bi-youtube"></i></a></span>
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
