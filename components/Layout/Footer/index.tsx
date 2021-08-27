import Image from 'next/image'
import Link from 'next/link'
import DeptIcon from 'public/icons/icon-dept.svg'

import FacebookIcon from 'public/icons/icon-fb.svg'
import InstagramIcon from 'public/icons/icon-instagram.svg'
import TwitterIcon from 'public/icons/icon-twitter.svg'

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
                            LINKS.map(link =>
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
                        SOCIAL.map(social =>
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

const LINKS = [
    {
        title: 'work',
        link: '/work'
    },
    {
        title: 'service',
        link: '/service'
    },
    {
        title: 'stories',
        link: '/stories'
    },
    {
        title: 'about',
        link: '/about'
    },
    {
        title: 'careers',
        link: '/careers'
    },
    {
        title: 'contact',
        link: '/contact'
    }
]

const SOCIAL = [
    {
        title: 'Facebook',
        link: 'https://facebook.com/dept',
        icon: FacebookIcon
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/dept',
        icon: TwitterIcon
    },
    {
        title: 'Instagram',
        link: 'https://instagram.com/dept',
        icon: InstagramIcon
    }
]