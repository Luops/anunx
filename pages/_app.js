import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props; //a funcao myapp está recebendo COmponent e pageprops

  React.useEffect(() => {
    //remove the server-side inkected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = { //O que vai receber de props? 
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};