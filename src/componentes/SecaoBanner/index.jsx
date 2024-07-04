import styles from "./SecaoBanner.module.css";

import Banner from  "../../assets/banner.png";
import Image from "next/image";

export default function SecaoBanner(props){
    return(
        <div className={styles.container}>
            <div  className={props.cor == false ? styles.imagem : styles.imagem_dark}>
                <Image className={styles.imagem_pessoa} src={Banner}/>
            </div>

            <div className={styles.texto}>
                    <p>BRANDING / UI / UX / TECNOLOGIA
                    </p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
            </div>

        </div>
    )
}