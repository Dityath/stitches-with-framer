import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import globalStyles from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Seo />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
