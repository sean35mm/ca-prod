import React from 'react'
import Head from 'next/head'

import Navbar from '../Navbar'



const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout