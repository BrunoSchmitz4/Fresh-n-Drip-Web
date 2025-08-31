import styles from './Navbar.module.css'

const UserData = "";

function Navbar( {type} ) {

    if (type === "nav") 
        return (
            <nav className={styles.navbarContainerNav}>
                <a href="/" className={styles.navbarAnchor}>Home</a>
                <a href="/" className={styles.navbarAnchor}>Novidades</a>
                <a href="/" className={styles.navbarAnchor}>Populares</a>
                <a href="/" className={styles.navbarAnchor}>Camisas e Moletons</a>
                <a href="/" className={styles.navbarAnchor}>Calças e Bermuda</a>
                <a href="/" className={styles.navbarAnchor}>Vestidos e Macacões</a>
                <a href="/" className={styles.navbarAnchor}>Calçados</a>
                <a href="/" className={styles.navbarAnchor}>Acessórios</a>
            </nav>
        )
    else if (type === "user") 
        return (
            <nav className={styles.navbarContainer}>
                <p className={styles.navbarUsername}>
                    { UserData ? `Como vai, ${UserData}?` : `É preciso logar para ver seu carrinho` }
                </p>
            </nav>
        )
    else if (type === "shop")
        return (
            <nav className={styles.navbarContainer}>
                <p className={styles.navbarUsername}>
                    Carrinho de Compras
                </p>
            </nav>
        )
}

export default Navbar