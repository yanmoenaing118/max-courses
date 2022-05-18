import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} name="Yan Moe Naing" />
    </Layout>
  );
}

export default MyApp;
