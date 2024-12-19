import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import './Global.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>

        <Head>
          <Link rel='icon' href="public/favicon.ico"/>
        </Head>

        <div className='container'>

          <div className='backgroundImg'>
            <header>
              <Link href='/'>
                <Image src={"/Images/logo.png"} height={100} width={100} alt='' className='logo_img' aria-label='Link to home page'></Image>
              </Link>
              <div className='welcomeText'>
                <div className='welcomeText_head'>
                  <h1>Cantor College</h1>
                </div>
              </div>
              <Navbar/>
            </header>
          </div>

          {children}
        
        </div>

        <Footer/>

      </body>
    </html>
  );
}