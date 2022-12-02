import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="/imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='' />
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </div>

    )
}

export default Rodape