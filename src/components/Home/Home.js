import React from 'react';
import './Home.css';

import deskShot from '../../assets/home-studio-desk.jpg';

const Home = () => {
    return (
        <div className="home-tab-container">
            <img className="desk-shot-img" src={deskShot} alt="desk-shot" />
        </div>
    )
}

export default Home;
