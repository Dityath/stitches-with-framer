import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import globalStyles from "../styles/globalStyle";
import { Main, MainInside } from "../styles/style";

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles();

  return (
    <>
      <Seo />
      <Navbar />
      <Main
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
