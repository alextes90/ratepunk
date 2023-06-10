import { noto_sans } from "@/fonts/Fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`${noto_sans.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
