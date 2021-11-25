import './styles/Home.css';
import React from 'react';
import background from '../assets/QuickBackground.png';
import AboutCards from '../components/Home/AboutCards';

const Home = () => {
    return (
        <main
            className='mainSection'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div>
                <p>
                    Need a short break in a long day? Take your shot at a timed
                    drawing!
                </p>
            </div>
            <AboutCards />
        </main>
    );
};

export default Home;
