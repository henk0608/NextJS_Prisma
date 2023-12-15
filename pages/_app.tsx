import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

//another commit: git commit -a -m "test commit" and then git push

export default App;
