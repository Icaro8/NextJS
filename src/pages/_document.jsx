import { Html, Head,Main, NextScript } from "next/document";
import React from "react";

export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https: //fonts.googleapis.com/css2? family= IBM+Plex+Sans:wght@400;700 & family= Prompt:wght@400;700;900 & display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}
