import styles from "../Home/Home.module.css";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import CardSection from "components/CardSection";
import Card from "components/Card";

// Test
import productsData from "../../components/database/products.json"

function Home() {

    return (
        <>
        <Header />
        <Navbar />
        <Banner />
        <CardSection>
            {/* Lógica de renderização condicional corrigida */}
        {productsData && productsData.data_products && productsData.data_products.length > 0 ? (
          productsData.data_products.map(product => (
            <Card key={product.product_id} product={product}/>
          ))
        ) : (
          <p>Algo deu errado ao carregar os dados</p>
        )}
        </CardSection>
        <h2 className={styles.headerSubtitle}>Monte seu estilo com essas peças tendências</h2>
        </>   
    )
}

export default Home;