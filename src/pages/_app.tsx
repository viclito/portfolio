import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Navbar from '../../components/Navbar/Navbar'

const montserrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${montserrat.variable} font-mont bg-light overflow-hidden`}>
    <Navbar/>
    <Component {...pageProps} />
  </main>
}
