import Image from 'next/image'
import Link from 'next/link'

//data
import { FOOTER_LINKS, FOOTER_SOCIAL } from '@enum/data'

//asset
import DeptIcon from 'public/icons/icon-dept.svg'

//i18n
import { useTranslation } from 'next-i18next';

//style
import styles from './style.module.scss';

const Footer = (): JSX.Element => {
    const { t } = useTranslation('footer')
    return (
        <footer className={styles.container}>
            <section className={styles.top}>
                <div className={styles.topStart}>
                    <div
                        className={styles.logo}
                    >
                        <Image
                            layout="fixed"
                            src={DeptIcon}
                            height={28}
                            width={100}
                            alt={t('deptIcon')}
                        />
                    </div>
                    <ul className={styles.links}>
                        {
                            FOOTER_LINKS.map(link =>
                                <Link
                                    key={link.title}
                                    href={link.link}
                                    passHref={true}
                                >
                                    <li>
                                        {t(link.title).toUpperCase()}
                                    </li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
                <ul className={styles.social}>
                    {
                        FOOTER_SOCIAL.map(social =>
                            <Link
                                key={social.title}
                                href={social.link}
                                passHref={true}
                            >
                                <li className={styles.icon}>
                                    <Image   
                                        src={social.icon}
                                        layout="fill"
                                        alt={social.title}
                                    />
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </section>
            <hr />
            <section className={styles.bottom}>
                <ul className={styles.bottomStart}>
                    <li>{t('address')}</li>
                    <li>{t('vat')}</li>
                    <li>{t('terms')}</li>
                </ul>
                <span>{t('copyright')}</span>
            </section>
        </footer>
    )
}

export default Footer