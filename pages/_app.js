import NavComponent from "../components/NavComponent";

import "../styles/globals.css";
import "../node_modules/normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavComponent />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
