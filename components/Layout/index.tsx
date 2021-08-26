import { ReactNode } from 'react';
import Head from 'next/head'

//layout components
import Header from './Header';

import styles from './style.module.scss'

interface ILayout {
    children: ReactNode
}

const Layout = (props: ILayout): JSX.Element => {
    const { children } = props;
    return (
        <div>
            <Head>
                <title>DEPT</title>
                <meta name="description" content="Dept Test Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>
                {children}
            </main>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout