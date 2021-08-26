import { ReactNode } from 'react';


//i18n
import { useTranslation } from 'next-i18next';

//layout components
import Header from './Header';

//style
import styles from './style.module.scss'

interface ILayout {
    children: ReactNode
}

const Layout = (props: ILayout): JSX.Element => {
    const { children } = props;
    const { t } = useTranslation('common');
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />

                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout
