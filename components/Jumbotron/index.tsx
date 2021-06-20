import Image from 'next/image';
import styles from '../../styles/Jumbotron.module.css';

export default function Jumbotron() {
  return (
    <header className={styles.jumbotron}>
      <h1 className={styles.textCenter}>Carvalho & <br/> Marcelino</h1>
      <p>Somos uma equipe cuja missão é ser a solução para o cliente, evitando desgastes desnecessários.</p>

      <p>Nossa experiência de mais de oito anos e equipe diversificada possibilita atendimento integral aos clientes, suprindo as necessidades jurídicas</p>

      <p>O escritório está localizado na Barra da Tijuca, estrategicamente bla bla bla bla.</p>
      
      <p>Temos horário de atendimento diferenciado, possibilitando acesso fora do horário tipicamente comercial, seja em nosso escritório ou em atendimento externo, havendo ainda a opção de que nossos clientes sejam atendidos à distância, utilizando meios digitais para facilitar comunicação e atendimento.</p>
      
      <p>Temos parceiros em todo o Estado do Rio de Janeiro, possibilitando a realização de audiências em todo o território.</p>
    </header>
  )
}