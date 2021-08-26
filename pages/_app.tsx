import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>DEPT</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preload" href="/fonts/Teko/Teko-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Teko/Teko-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Teko/Teko-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Teko/Teko-SemiBold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Teko/Teko-Bold.ttf" as="font" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default appWithTranslation(MyApp)
