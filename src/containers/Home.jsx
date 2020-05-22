import React from 'react';
import '../assets/styles/containers/Home.css';

import HomeArticle from '../components/HomeArticle';

const Home = () => {
    let learning = "https://cdn.bulbagarden.net/upload/5/5f/Pok%C3%A9mon_School.png",
        training = "https://cdn.bulbagarden.net/upload/4/4b/Mahogany_Gym_Battlefield.png",
            news = "https://cdn.bulbagarden.net/upload/4/4b/Mahogany_Gym_Battlefield.png";

    return (
        <div className="home">
            <section>
                <HomeArticle text="Learning" img={learning} url="/learning"/>
                <HomeArticle text="Training" img={training} url="/training"/>
                <HomeArticle text="News" img={news} url="/news"/>
            </section>
            <aside>
                <div>Ranking</div>
                <div>Curious</div>
            </aside>
        </div>
    );
}

export default Home;
