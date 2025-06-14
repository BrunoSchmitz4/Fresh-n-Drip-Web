import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            {/* Fazer um map de cada tipo de produto (usando abaixo como exemplo*/}
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
}

export default Navbar