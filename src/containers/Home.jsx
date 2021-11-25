import './styles/Home.css';
import React from 'react';
import background from '../assets/QuickBackground.png';
import AboutCards from '../components/Home/AboutCards';
import title from '../assets/QuickTitle.png';

const Home = () => {
    return (
        <main
            className='mainSection'
            style={{ backgroundImage: `url(${background})` }}
        >
            <img src={title} alt='Quick on the Draw' className='titleImage' />
            <div className='innerContainer'>
                <p>
                    Need a short break in a long day? Take your shot at a timed
                    drawing! Quick on the Draw gives a quick and fun way to take
                    your mind off of work.
                </p>
                <h3 className='header'>Instructions:</h3>
                <p>
                    Click Draw to go to the Draw page. Choose your timer
                    setting, then choose your colors and brush size at the
                    bottom of the screen. Undo or Clear when you need and
                    Download your image when you're finished!
                </p>
                <h3 className='header'>Technologies:</h3>
                <p>
                    Quick on the Draw was build with React.js and
                    react-canvas-draw. Tailwind.css and Craco were used for
                    styling. It is deployed on Netlify.
                </p>
            </div>
            <AboutCards />
        </main>
    );
};

export default Home;
