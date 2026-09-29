import Styles from './css/footer.module.css'
import Facebook from '../assets/imagens/facebook.jpeg'
import Whats from '../assets/imagens/whats.jpeg'
import Instagram from '../assets/imagens/instagram.jpeg'

function Footer() {
  return (
    <section className={Styles.footer}>

      <h4 className={Styles.titulo}>
        Nossos instrumentos musicais
      </h4>

      <p className={Styles.texto}>
        Rua Lapa Tito
      </p>

      <p className={Styles.texto}>
        São Paulo - Brasil
      </p>

      <div className={Styles.icones}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Instagram} alt="Instagram" />
        <img src={Facebook} alt="Facebook" />
      </div>

    </section>
  );
}

export default Footer;