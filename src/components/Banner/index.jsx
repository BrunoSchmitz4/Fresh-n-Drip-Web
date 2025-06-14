import styles from './Banner.module.css'
import bannerImg from './bannerImg.svg'

function Banner() {
    return (
        <>
            <div className={styles.bannerContainer}>
                <img className={styles.bannerImg} src={bannerImg} alt="Imagem do banner" />
                <span className={styles.bannerSpan}>
                    <span className={styles.bBlueStyle}>Moda</span> e <span className={styles.bBlueStyle}>liberdade</span> andam juntos, orgulhe-se do <span className={styles.bRedStyle}>seu estilo</span>.
                    </span>
            </div>
        </>
    )
}

export default Banner;