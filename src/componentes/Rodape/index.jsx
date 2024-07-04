import Image from "next/image";

import styles from "./Rodape.module.css";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import google from "../../assets/google-plus.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import logo from "../../assets/logo.png";


export default function Rodape(props){
    return(
        <div className={props.cor == false ? styles.container : styles.container_dark}>



        <Image className={styles.imagem} src={logo}/>
        <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
</p>

        <div className={styles.container_imagem}>
                <Image className={styles.imagem} src={facebook}/> 
                <Image className={styles.imagem} src={twitter}/>
                <Image className={styles.imagem} src={linkedin}/> 
                <Image className={styles.imagem} src={dribble}/> 
                <Image className={styles.imagem} src={behance}/> 
                <Image className={styles.imagem} src={google}/>  
        </div>

<p>Copyright 2024 <span> André Santos</span></p>

        </div>
       
    )
}