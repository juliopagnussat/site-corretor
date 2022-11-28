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
        <div>
          <img src="https://raw.githubusercontent.com/juliopagnussat/site-corretor/main/public/images/Logo.png" width={350}/>
        </div>
        <br></br>
        <h3>Escolha um dos links abaixo para conversar comigo!</h3>
        <br></br>
            <div className="wrapper">
              <div className="icon whatsapp">
                <div className="tooltip">Whatsapp</div>
                <span><a href="http://bit.ly/juliopagnussat"><i className="bi bi-whatsapp"></i></a></span>
              </div>
              <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><a href="http://facebook.com/juliopagnussatcorretor"><i className="bi bi-facebook"></i></a></span>
              </div>
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><a href="http://instagram.com/juliopagnussatcorretor"><i className="bi bi-instagram"></i></a></span>
              </div>
              <div className="icon youtube">
                <div className="tooltip">Youtube</div>
                <span><a href="http://youtube.com/juliopag"><i className="bi bi-youtube"></i></a></span>
              </div>
            </div>
      </main>
      
      <footer className="footer">
          
          <div className="text-footer">
            <h2>Contato: (49) 99115-2221</h2>
            <h2>Corretor de Imóveis</h2>
            <p></p>
            <a href="http://www.flety.com.br">www.flety.com.br</a>
          </div>
      </footer>
    </div>
  )
}
