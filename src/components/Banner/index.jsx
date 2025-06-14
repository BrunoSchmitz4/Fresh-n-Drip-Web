import styles from './Banner.module.css'
import bannerImg from './bannerImg.svg'

function Banner() {
    return (
        <>
            <div className={styles.bannerContainer}>
                <img className={styles.bannerImg} src={bannerImg} alt="Imagem do banner" />
                <span className={styles.bannerSpan}>Moda e liberdade andam juntos, orgulhe-se do seu estilo.</span>
            </div>
        </>
    )
}

export default Banner;