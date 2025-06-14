import styles from './Card.module.css'


// Estrutura de um Card:
// Recebe um tipo e um item
// Se seu tipo for prod (product) será tamanho padrão e exibirá o item,
// Se seu tipo for coll (collection) será tamanho grande e exibirá a a imagem do item como capa da coleção.
function Card() {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardBox}>
                    <img className={styles.cardImg} src="" alt="Imagem do Card" />
                    <span className={styles.cardSpan}></span>
                </div>
                <div className={styles.cardBox}>
                    <p className={styles.cardDesc}></p>
                    <button className={styles.cardBtn}>Adicionar ao Carrinho</button>
                </div>
            </div>
        </>
    )
}

export default Card;