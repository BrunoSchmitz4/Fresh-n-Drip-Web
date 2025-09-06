import Header from "components/Header"
import Navbar from "components/Navbar"
import PageContent from "components/PageContent";
import styles from './Shop.module.css'
import ContentSection from "components/ContentSection";

function Shop() {
    return (
        <>
            <Header />
            <Navbar type="shop" />
            <PageContent>
                <ContentSection>
                    <div className={styles.shopBoxContent}>
                        {/* Aqui vai a listagem dos produtos no carrinho */}
                    </div>
                </ContentSection>
                <ContentSection>
                    <div className={styles.shopBoxContent}>
                        {/* Aqui vai as informações do endereço */}
                    </div>
                </ContentSection>
                <ContentSection type={"folder"}>
                    <div className={styles.shopBoxContent}>
                        {/* Aqui vai as informações do pagamento */}
                    </div>
                </ContentSection>
                <ContentSection>
                    <div className={styles.shopBoxContent}>
                        {/* Aqui vai as informações do valor do pedido s/c desconto */}
                    </div>
                </ContentSection>
            </PageContent>
        </>
    )
}

export default Shop;