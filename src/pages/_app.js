import { AppProvider } from "@/context/AppContext";
import "../GlobalStyles.css";
import MainContainer from "../components/MainContainer";


function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </AppProvider>
  );
}

export default MyApp;
