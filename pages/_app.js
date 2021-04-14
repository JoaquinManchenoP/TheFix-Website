import "tailwindcss/tailwind.css";
import Layout from "../public/Layout";
import NavBar from "../public/Components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app mt-10">
        <NavBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
