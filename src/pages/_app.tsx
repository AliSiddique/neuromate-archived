import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Navbar from '../../components/Constants/Navbar';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
   <Toaster position='top-right'/>
    <Navbar/>
    <Component {...pageProps} />
  </>
  )
  ;
}


