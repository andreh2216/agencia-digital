
import React from "react";


import Image from "next/image";
import styles from "./Topo.module.css";

import Logo from "../../assets/logo.png";
import BotaoDark from "../../assets/moon.png";
import BotaoLitgh from "../../assets/sun.png";


export default function Topo(props){



    return(
        <div className={props.cor == false ? styles.container : styles.dark}>
            
            <Image className={styles.img} src={Logo}/>

            <button     className={props.cor == false ? styles.btn : styles.dark_btn}  onClick={props.troca}>
                
                
                <Image 
            
                  className={props.cor == false ? styles.img_tres : styles.img_dois}    
                  src={props.cor == false ? BotaoDark : BotaoLitgh}
                
                />
                
                </button>

        </div>
    )
}