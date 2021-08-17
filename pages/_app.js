import "tailwindcss/tailwind.css";
import Container from "../components/container/container";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
