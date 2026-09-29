import Styles from './css/cabecalho.module.css'

function Cabecalho() {
    return (
        <header className={Styles.header}>
             
            <nav className={Styles.menu}>
                <a href="#">Home</a>
                <a href="#">Quem somos</a>
                <a href="#">Instrumentos</a>
                <a href="#">Endereços</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Cabecalho