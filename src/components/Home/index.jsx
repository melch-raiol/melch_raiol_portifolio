import './styles.css'

export default function Home() {

    return (
        <section className='container-home' id="section-1">
            <div className='text-home-container'>
                <div className='div-text'>
                    <p className='text-test'>texto de teste para ver como ftexto <br></br>de teste para texto de teste para ver<br></br> como ftexto de teste para </p>
                </div>
            </div>
            <div className='image-home-container'>
                <div className='image-text'>
                    <div className='img'>foto do melch</div>
                    <div className='div-i-am'>
                        <h3>Eu Sou</h3>
                        <h1>Melch Raiol</h1>
                        <h2>Desenvolvedor Full Stack</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}