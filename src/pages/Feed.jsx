import './Feed.css'
import React, { Component } from 'react'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Apenas um Teste</span>
                            <span className="place">Portão, RS</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="https://image.freepik.com/fotos-gratis/3d-render-medico-imagem-macho-figura-cerebro-destacado_1048-5873.jpg" alt="Postagem" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>
                        <p>Um post massa!
                        <span>#teste #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed