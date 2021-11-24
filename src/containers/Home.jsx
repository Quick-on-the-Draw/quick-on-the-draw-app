import './styles/Home.css';
import React from 'react';
import background from '../assets/QuickBackground.png';

const Home = () => {
    return (
        <main
            className='mainSection'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div>
                <h2>HOME</h2>
            </div>
        </main>
    );
};

export default Home;
