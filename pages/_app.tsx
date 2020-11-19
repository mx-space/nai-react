import { BaseLayout } from 'layouts/base'
import '../assets/main.css'
import QProgress from 'qier-progress'

import Router from 'next/router'
import React, { useCallback, useEffect } from 'react'

import { configs } from 'configs'
import Head from 'next/head'
export const progress = new QProgress()
function MyApp({ Component, pageProps }) {
  const registerRouterEvents = useCallback(() => {
    Router.events.on('routeChangeStart', (url) => {
      progress.start()
    })
    Router.events.on('routeChangeComplete', () => {
      progress.finish()
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })

    Router.events.on('routeChangeError', () => {
      progress.finish()
    })
  }, [])

  useEffect(() => {
    registerRouterEvents()
  }, [])
  return (
    <BaseLayout>
      <Head>
        <title>{configs.title + ' | ' + configs.subtitle}</title>
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
