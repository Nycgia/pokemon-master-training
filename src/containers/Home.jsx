import React from 'react';
import '../assets/styles/containers/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section>
                <article><h2>Learning</h2></article>
                <article><h2>Training</h2></article>
                <article><h2>News</h2></article>
            </section>
            <aside>
                <div>Ranking</div>
                <div>Curious</div>
            </aside>
        </div>
    );
}

export default Home;
