import React from 'react';
import { initGA, logPageView } from '../analytic'
import Router from 'next/router'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
