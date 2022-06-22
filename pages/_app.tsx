import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="mt-16 2xl:max-w-5xl mx-auto lg:px-16 md:px-8 px-4 ">
      <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
