import Header from "components/Header"
import Navbar from "components/Navbar"
import PageContent from "components/PageContent";
import styles from './Shop.module.css'

function Shop() {
    return (
        <>
            <Header />
            <Navbar type="shop"/>
            <PageContent>
                <div className={styles.shopBoxContent}>
                    {/* Aqui vai a listagem dos produtos no carrinho */}
                </div>
                <div className={styles.shopBoxContent}>
                    {/* Aqui vai as informações do endereço */}
                </div>
                <div className={styles.shopBoxContent}>
                    {/* Aqui vai as informações do pagamento */}
                </div>
                <div className={styles.shopBoxContent}>
                    {/* Aqui vai as informações do valor do pedido s/c desconto */}
                </div>
            </PageContent>
        </>
    )
}

export default Shop;