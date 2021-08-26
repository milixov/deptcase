import type { NextPage } from 'next'

import Image from 'next/image'
import Layout from '@components/Layout'

import styles from './style.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        layout
      </Layout>
    </div>
  )
}

export default Home
