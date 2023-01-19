import type { AppProps } from "next/app";
import "@/styles/globals.css";
import localFont from "@next/font/local";

const headerFont = localFont({ src: "../public/fonts/Mallory Medium.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={headerFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
