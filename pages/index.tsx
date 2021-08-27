import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
        layout
    </Layout>
  )
}

export default Home

interface IStaticProps {
    locale: string
}

export async function getStaticProps(props: IStaticProps) {
    const { locale } = props;
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
      },
    };
}
