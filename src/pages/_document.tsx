import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e51113201b492023f6d894be924b9270"
        ></script>
        <title>진하♥지원 모바일 청첩장</title>
        <meta property="og:title" content="진하♥지원 모바일 청첩장" />
        <meta property="og:image" content="/og.jpeg"></meta>
        <meta
          name="description"
          content="저희 결혼합니다. 부디 오셔서 축하해주세요."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
