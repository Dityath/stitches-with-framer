import type { AppProps } from "next/app";
import Seo from "../components/seo";
import globalStyles from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
