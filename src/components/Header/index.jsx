import styles from './Header.module.css'
import logoIcon from './Logo.svg'
import Order from './OrderIcon.svg'
import Shop from './ShopIcon.svg'
import User from './UserIcon.svg'

function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerBox}>
                    <img className={styles.headerLogo} src={logoIcon} alt="Logo Fresh'n Drip" />
                </div>
                <div className={styles.headerBox}>
                    <input className={styles.headerSearchbar} type="text" placeholder='O que vai vestir hoje?'/>
                    <nav className={styles.headerNav}>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src={User} alt="User Profile" /></a>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src={Shop} alt="Shop" /></a>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src={Order} alt="Orders" /></a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;