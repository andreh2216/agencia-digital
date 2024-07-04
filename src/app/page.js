'use client';
import {useState} from 'react';


import styles from "./page.module.css";




import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";


export default function Home(props) {

  const [cor, setCor] = useState(false);

  function trocarTema(){
    setCor(!cor)
  }



 


  return (



    <main className={styles.main}>


      
      <Topo cor={cor} troca={trocarTema}/>
      <SecaoBanner cor={cor} />
      <SecaoExperienciaTrabalho cor={cor}/>
      <Rodape cor={cor}/>



    </main>
  );
}
