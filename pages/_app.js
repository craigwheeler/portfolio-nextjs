import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
