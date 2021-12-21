import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
