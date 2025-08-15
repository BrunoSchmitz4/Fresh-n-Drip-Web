import styles from "./PageTitle.module.css"

function PageTitle( {PageTitle = "Título da Página"} ) {
    return (
        <>
            <div className={styles.pageTitleDiv}>
                <h1 cl>
                    {PageTitle}
                </h1>
            </div>
        </>
    )
}

export default PageTitle;