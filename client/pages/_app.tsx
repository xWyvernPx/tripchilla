import type { AppProps } from "next/app";
import Layout from "../_components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { Loader } from "_components/common";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  } // to fix a bug/weird behavior where the app is not rendering React18
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<Loader />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Suspense>
      </RecoilRoot>
    </Router>
  );
}

export default MyApp;
