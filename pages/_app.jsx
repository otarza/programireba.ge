import Script from "next/script";

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N2VFCQNXQ4" />
        <Script src="/scripts/ga.js" />
        <Script src="/scripts/pixel.js" />
      </>
    );
  }