import styles from "./Card.module.css";


const Card = (props) =>{
    return(
        
        <div className={styles.card}>

        <p className={styles.paragrafo}>{props.paragrafo_um}</p>
        <h2 className={styles.subtitulo}>{props.subtitulo}</h2>
        <p className={styles.paragrafo}>{props.paragrafo_dois}</p>

        <p  className={styles.paragrafo}>{props.paragrafo_tres}</p>

        </div>
    
    )
}

export default Card;