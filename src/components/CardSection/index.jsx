import styles from "./CardSection.module.css";

function CardSection({ type }, { children }) {
  switch ({ type }) {
        // Caso seja um grande (mostra um único) e precisa de um ID para exibir o card único
    case "big":
        return (
            <section className={styles.cardSectionContainerBig}> {children} </section>
        )
        // Caso seja um pequeno (uma única linha)
    case "small":
        return (
            <section className={styles.cardSectionContainerSmall}> {children} </section>
        )
        // Caso não seja especificado
    default:
        return (
            <section className={styles.cardSectionContainerDefault}> {children} </section>
        )
  }
}

export default CardSection;
