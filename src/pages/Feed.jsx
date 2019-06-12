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
                    <img src="" alt="Postagem"/>
                </article>
            </section>
        );
    }
}

export default Feed