import styles from './PageContent.module.css'


function PageContent( { children } ) {
    return (
        <>
            <section className={styles.PageContentSection}>
                { children }
            </section>
        </>
    )
}

export default PageContent;