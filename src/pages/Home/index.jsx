import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import CardSection from "components/CardSection";
import Card from "components/Card";

function Home() {
    return (
        <>
        <Header />
        <Navbar />
        <Banner />
        <CardSection>
            <Card />
            <Card />
        </CardSection>
        <h2 className={styles.headerSubtitle}>Monte seu estilo com essas peças tendências</h2>
        <CardSection>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardSection>
            <Card />

        </>   
    )
}

export default Home;