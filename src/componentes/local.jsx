import Styles from './css/local.module.css'

function Local() {
    return (
        <section className={Styles.local}>
            <div className={Styles.mapa}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122920030118!2d-46.69433512378939!3d-23.528080960372165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790708239305!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Localização da loja"
                ></iframe>
            </div>

            <div className={Styles.texto}>
                <h2>Nossa Loja - Instrumentos Musicais</h2>
                <p>
                    Se você é um amante da música, está em busca de um novo
                    instrumento musical e não abre mão da qualidade, chegou ao lugar
                    certo! (resto do texto)
                </p>
            </div>
        </section>
    )
}

export default Local