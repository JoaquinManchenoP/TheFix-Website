import "tailwindcss/tailwind.css";
import Layout from "../public/Layout";
import NavBar from "../public/Components/NavBar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app mt-10">
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
