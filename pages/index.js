import Head from 'next/head'
import Image from 'next/image'

import Layout from '../src/components/ui/Layout'


export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className='font-panther'>Hello World!</h1>
      </div>
    </Layout>
  )
}
