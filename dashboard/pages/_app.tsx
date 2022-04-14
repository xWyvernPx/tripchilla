import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild,setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, [])
  if(!showChild) {
    return null;
  } // to fix a bug/weird behavior where the app is not rendering React18
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
