import { ReactNode } from 'react';
import Image from 'next/image'
import TopIcon from 'public/icons/icon-scroll-to-top.svg'

//i18n
import { useTranslation } from 'next-i18next';

//layout components
import Header from './Header';
import Footer from './Footer';

//style
import styles from './style.module.scss'
import Link from 'next/link';

interface ILayout {
    children: ReactNode
}

const Layout = (props: ILayout): JSX.Element => {
    const { children } = props;
    const { t } = useTranslation('common');
    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Header />
                    <main className={styles.main}>
                        {children}
                    </main>
                </div>
            </div>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContainer}>
                    <Footer />
                    <Link href="#" passHref={true}>
                        <div className={styles.top}>
                            <Image
                                src={TopIcon}
                                alt={t('scrollToTop')}
                            />
                            <span>
                                {t('top').toUpperCase()}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Layout
