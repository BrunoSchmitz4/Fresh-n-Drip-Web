import styles from './index'

function ContentSection({ children, type }) {

    if (type === "folder") {
        return (
            <section className={styles.ContentSectionFolder}>
                <button></button>
                <button></button>
                <div className="ContentSectionBox">
                    Esse é o folder
                    { children }
                </div>
            </section>
        )
    }
    return (
        <section className={styles.ContentSectionDefault}>
            Esse é o default
            { children }
        </section>
    )
}

export default ContentSection;