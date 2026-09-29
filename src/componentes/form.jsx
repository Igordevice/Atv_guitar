import Styles from './css/form.module.css'
import Facebook from '../assets/imagens/facebook.jpeg'
import Whats from '../assets/imagens/whats.jpeg'
import Instagram from '../assets/imagens/instagram.jpeg'

function Form() {
    return (
        <section className={Styles.contato}>
 
            <div className={Styles.formulario}>
                    <label htmlFor="nome">Entre com o seu nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome aqui" />
 
                    <label htmlFor="email">Entre com o seu e-mail:</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu email aqui" />
 
                    <textarea name="pedido" aria-label="Seu pedido" placeholder="Faça seu pedido por aqui:"></textarea>
 
                    <button type="submit">Enviar</button>
            </div>
 
            <div className={Styles.redes}>
                <h2>Acesse também nossas redes sociais:</h2>
                <div className={Styles.icones}>
                    <a href="#"><img src={Whats} alt="WhatsApp" /></a>
                    <a href="#"><img src={Instagram} alt="Instagram" /></a>
                    <a href="#"><img src={Facebook} alt="Facebook" /></a>
                </div>
            </div>
 
        </section>
    )
}
 
export default Form