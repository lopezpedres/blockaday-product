import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Layout/Layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <div className="mt-16 2xl:max-w-5xl mx-auto lg:px-16 md:px-8 px-4 ">
          <Component {...pageProps} />
        </div>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
