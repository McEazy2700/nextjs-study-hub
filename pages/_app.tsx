import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:text-white font-poppins dark:bg-dark-bg">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
