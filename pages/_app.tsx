import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Navbar, Footer } from "@/components";


const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false);
  }, []);

  if (isSSR) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <div className="cover-container">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
};

export default App;
