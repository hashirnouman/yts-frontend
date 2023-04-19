import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import AdminLayout from "../Layout/Admin/AdminLayout";
import { Suspense, useEffect } from "react";
import "../locale/i18n";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { useDetectAdBlock } from "adblock-detect-react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const adBlockDetected = useDetectAdBlock();
  const router = useRouter();
  if (adBlockDetected) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Head>
          <title>Disable Ad Blocker</title>
        </Head>
        <div style={{ textAlign: "center" }}>
          <h1>Ad blocker Detected</h1>
          <h3>Disable Add blocker and reload website</h3>
        </div>
      </div>
    );
  }
  return (
    <Provider store={store}>
      {router.pathname.includes("admin") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
