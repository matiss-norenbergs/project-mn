import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles["footer-wrapper"]}>
            <span className={styles["text"]}>© Matīss Norenbergs</span>
        </footer>
    )
}

export default Footer