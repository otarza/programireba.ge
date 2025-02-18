import Script from "next/script";

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Script src="/scripts/ga.js" />
        <Script src="/scripts/pixel.js" />
      </>
    );
  }