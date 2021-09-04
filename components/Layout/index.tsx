import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import classNames from 'classnames/bind'

//asset
import TopIcon from 'public/icons/icon-scroll-to-top.svg'

//i18n
import { useTranslation } from 'next-i18next';

//layout components
import Header from './Header';
import Footer from './Footer';
import Drawer from './Drawer';

//style
import styles from './style.module.scss'

let cx = classNames.bind(styles);
interface ILayout {
    children: ReactNode
}

const Layout = (props: ILayout): JSX.Element => {
    const { children } = props;
    const { t } = useTranslation('common');
    
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const drawerClass = cx(
        {
            drawer: true,
            drawerOpen: isDrawerOpen,
            drawerClose: !isDrawerOpen
        }
    )

    const pageClass = cx(
        {
            page: true,
            pageLock: isDrawerOpen,
        }
    )

    const handleOnMenuClick = () => {
        setDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setDrawerOpen(false)
    }

    return (
        <div className={styles.layout}>
            <div className={drawerClass}>
                <Drawer
                    closeDrawer={handleCloseDrawer}
                />
            </div>
            <div className={pageClass}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <Header onMenuClick={handleOnMenuClick}/>
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
        </div>
    )
}

export default Layout
