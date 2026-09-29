import Styles from './css/miool.module.css'
import loja from '../assets/imagens/loja.jpeg'

function Miolo() {
    return (
        <section className={Styles.sobre}>
            <div className={Styles.texto}>
                <h2>Nossa Loja - Instrumentos Musicais</h2>

                <p>
                    Se você é um amante da música, está em busca de um novo
                    inAstrumento musical e não abre mão da qualidade, chegou ao lugar
                    certo! Aqui em nossa loja você encontra os melhores itens, como:
                    teclado, piano (digital e acústico), contrabaixo, bateria, guitarra,
                    violão, sopro e muito mais! Nossos instrumentos possuem o selo de
                    qualidade das melhores marcas do mercado! Escolha os seus favoritos
                    e os receba em casa com toda a comodidade que você precisa.
                    Confira nossas opções disponíveis e tenha em mãos instrumentos de
                    ponta!
                </p>
            </div>
            <div className={Styles.imagem}>
                <img src={loja} alt='Loja de violão'/>
            </div>
        </section>
    )
}

export default Miolo