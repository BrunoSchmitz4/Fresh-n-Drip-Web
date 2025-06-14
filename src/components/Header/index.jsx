import styles from './Header.module.css'
import logoIcon from './Logo.svg'

function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerBox}>
                    {/* Aqui vai a logo */}
                    <img className={styles.headerLogo} src={logoIcon} alt="Logo Fresh'n Drip" />
                </div>
                <div className={styles.headerBox}>
                    <input className={styles.headerSearchbar} type="text" placeholder='O que vai vestir hoje?'/>
                    <nav className={styles.headerNav}>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src="" alt="User Profile" /></a>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src="" alt="Shop" /></a>
                        <a className={styles.headerLinkAnchor} href="/"><img className={styles.headerLinkIcon} src="" alt="Orders" /></a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;