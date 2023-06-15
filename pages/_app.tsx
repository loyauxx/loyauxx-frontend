import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";
import Navbar from "@/components/Navbar";
import { Lato } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/components/Footer";

const inter = Lato({subsets: ["latin", "latin-ext"], weight: "400"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <div 
      className={inter.className}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
    </Provider>
  );
}
