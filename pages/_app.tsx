import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import AdminLayout from "../Layout/Admin/AdminLayout";
import { Suspense } from "react";
import "../locale/i18n";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
