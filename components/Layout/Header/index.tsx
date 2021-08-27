import Image from 'next/image'
import Link from 'next/link'
import DeptIcon from 'public/icons/icon-dept.svg'
import MenuIcon from 'public/icons/icon-menu.svg'

//i18n
import { useTranslation } from 'next-i18next';

//style
import styles from './style.module.scss';

const Header = (): JSX.Element => {
    const { t } = useTranslation('header')
    return (
        <header className={styles.container}>
            <Link href="#" passHref={true}>
                <Image
                    src={DeptIcon}
                    alt={t('deptIcon')}
                />
            </Link>
            <div className={styles.drawer}>
                <span>{t('menu')}</span>
                <Image
                    src={MenuIcon}
                    alt={t('deptIcon')}
                />
            </div>
        </header>

    )
}

export default Header