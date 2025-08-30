import styles from './Card.module.css'


// Estrutura de um Card:
// Recebe um tipo e um item
// Se seu tipo for prod (product) será tamanho padrão e exibirá o item,
// Se seu tipo for coll (collection) será tamanho grande e exibirá a a imagem do item como capa da coleção.
function Card({ product }) {
  return (
    <div className={styles.cardContainer} id={product.product_id}>
      <div className={styles.cardBox}>
        <img
          className={styles.cardImg}
          src={product.product_img}
          alt={product.product_name}
        />
        <span className={styles.cardSpan}>
          {product.product_name} - {product.product_brand}
        </span>
      </div>
      <div className={styles.cardBox}>
        <p className={styles.cardDesc}>
          {product.product_desc} <br /> R$ {product.product_price_list.BRL}
        </p>
        <button className={styles.cardBtn}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default Card;
