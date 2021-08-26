import Image from 'next/image'
import DeptIcon from 'public/icons/icon-dept.svg'
import MenuIcon from 'public/icons/icon-menu.svg'

//i18n
import { useTranslation } from 'next-i18next';

//style
import styles from './style.module.scss';

const Header = () => {
    const { t } = useTranslation('header')
    return (
        <>
            <header className={styles.container}>
                <Image
                    src={DeptIcon}
                    alt={t('deptIcon')}
                />
                <div className={styles.drawer}>
                    <span>{t('menu')}</span>
                    <Image
                        src={MenuIcon}
                        alt={t('deptIcon')}
                    />
                </div>
            </header>
            <hr className={styles.line}/>
        </>
    )
}

export default Header