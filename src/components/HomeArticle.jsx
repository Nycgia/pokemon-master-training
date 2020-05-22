import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/HomeArticle.css';

const HomeArticle = ({text, img, url}) => {
    return (
        <Link to={url}>
            <article className="article">
                <div className="article__items">
                    <img src={img} className="article__img" />
                    <span className="article__text">{text}</span>
                </div>
            </article>
        </Link>
    );
}

export default HomeArticle;
