import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

//data
import { DRAWER_COUNTRY, DRAWER_MENU, DRAWER_SOCIAL } from '@enum/data'

//assets
import DeptIcon from 'public/icons/icon-dept.svg'
import CloseIcon from 'public/icons/icon-close.svg'
import TriangleIcon from 'public/icons/icon-dropdown.svg'

//i18n
import { useTranslation } from 'next-i18next';

//style
import styles from './style.module.scss';

interface IDrawer {
    closeDrawer: Function
}

const Drawer = (props: IDrawer): JSX.Element => {
    const {
        closeDrawer
    } = props;

    const router = useRouter()
    const { t } = useTranslation('drawer');

    const handleCloseClick = () => {
        closeDrawer();
    }

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <div className={styles.logo}>
                            <Image
                                src={DeptIcon}
                                alt={t('deptIcon')}
                            />
                        </div>
                        <div
                            className={styles.close}
                            onClick={handleCloseClick}
                        >
                            <Image
                                src={CloseIcon}
                                alt={t('closeIcon')}
                            />
                        </div>
                    </header>
                    <div className={styles.wrapper}>
                        <div className={styles.gradientTop} />
                        <div className={styles.gradientBottm} />
                        <div className={styles.country}>
                            <span className={styles.countryTitle}>{t('country')}</span>
                            {
                                DRAWER_COUNTRY.map(item =>
                                    <div
                                        className={styles.langContainer}
                                        key={item.title}
                                    >
                                        {
                                            item.abbr === "en-US" && <div
                                                className={styles.indicatorSm}
                                            >
                                                <Image
                                                    src={TriangleIcon}
                                                    alt={t('closeIcon')}
                                                />
                                            </div>
                                        }
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                        <div className={styles.social}>
                            {
                                DRAWER_SOCIAL.map(item =>
                                    <Link
                                        key={item.title}
                                        href={`/${item.link}`}
                                        passHref
                                    >

                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                )
                            }
                        </div>
                        <main className={styles.main}>
                            {
                                DRAWER_MENU.map((item, index) =>
                                    <div key={`menu_drawer_${item}`} className={styles.link}>
                                        <div className={styles.item}>
                                            {
                                                router.pathname === item.link &&
                                                <div
                                                    className={styles.indicator}
                                                >
                                                    <Image
                                                        src={TriangleIcon}
                                                        alt={t('closeIcon')}
                                                    />
                                                </div>
                                            }
                                            <Link
                                                href={`/${item.link}`}
                                                passHref
                                            >
                                                <span className={styles.menu}>
                                                    {item.title}
                                                </span>
                                            </Link>
                                        </div>
                                        {
                                            index + 1 < DRAWER_MENU.length && <hr />
                                        }
                                    </div>
                                )
                            }
                        </main>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Drawer;