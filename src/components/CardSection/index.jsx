import styles from './CardSection.module.css'

function CardSection( {children} ) {
    return (
        <>
            <section className={styles.cardSectionContainer}>
                {children}
            </section>
        </>
    )
}

export default CardSection;