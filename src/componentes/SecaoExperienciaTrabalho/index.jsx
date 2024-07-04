import styles from "./SecaoExperiencia.module.css";
import Card from "../Card"

export default function SecaoExperienciaTrabalho(props){
    return(
        <div className={props.cor == false ? styles.container : styles.container_dark}>

            <div className={styles.container_texto}>

            <h2 className={props.cor == false ? styles.subtitulo : styles.subtitulo_dark}>Experiências De Trabalho</h2>
            <p className={styles.paragrafo}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>


            </div>

            <div className={styles.container_card}>
                <Card
                    paragrafo_um="JUNHO 2012 - 2016"
                    subtitulo="Web Designer"
                    paragrafo_dois="Pied Piper StartUp."
                    paragrafo_tres="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                      <Card
                    paragrafo_um="AGOSTO 2016 - 2019"
                    subtitulo="Product Designer"
                    paragrafo_dois="E Corp."
                    paragrafo_tres="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                /> 
                
                
                     <Card
                paragrafo_um="FEVEREIRO 2019 - 2021"
                subtitulo="Digital Consulting"
                paragrafo_dois="Arasaka Inc."
                paragrafo_tres="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
            />
            </div>


        </div>
    )
}