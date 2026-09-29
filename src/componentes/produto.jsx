import Styles from "./css/produto.module.css";
import violao from '../assets/imagens/violão.jpeg'

function Produto() {
  return (
    <section className={Styles.produtos}>

      <div className={Styles.produto}>
        <img src={violao} alt="Violão" />

        <p>
          VIOLÃO YAMAHA C70 II CLÁSSICO
          NYLON ACÚSTICO NATURAL
          BRILHANTE
        </p>

        <strong>R$ 989,50</strong>
      </div>

      <div className={Styles.produto}>
        <img src={violao} alt="Violão" />

        <p>
          VIOLÃO YAMAHA C70 II CLÁSSICO
          NYLON ACÚSTICO NATURAL
          BRILHANTE
        </p>

        <strong>R$ 989,50</strong>
      </div>

      <div className={Styles.produto}>
        <img src={violao} alt="Violão" />

        <p>
          VIOLÃO YAMAHA C70 II CLÁSSICO
          NYLON ACÚSTICO NATURAL
          BRILHANTE
        </p>

        <strong>R$ 989,50</strong>
      </div>

      <div className={Styles.produto}>
        <img src={violao} alt="Violão" />

        <p>
          VIOLÃO YAMAHA C70 II CLÁSSICO
          NYLON ACÚSTICO NATURAL
          BRILHANTE
        </p>

        <strong>R$ 989,50</strong>
      </div>

    </section>
  );
}

export default Produto;