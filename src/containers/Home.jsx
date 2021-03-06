import './styles/Home.css';
import React from 'react';
import AboutCards from '../components/Home/AboutCards';
import title from '../assets/QuickTitle.png';
import cactus from '../assets/Cactus.png';

const Home = () => {
    return (
        <main className='mainSection'>
            <img src={title} alt='Quick on the Draw' className='titleImage' />
            <section className='instructionsArea'>
                <div className='innerContainer'>
                    <p>
                        Need a short break in a long day? Take your shot at a
                        timed drawing! Quick on the Draw gives a quick and fun
                        way to take your mind off of work.
                    </p>
                    <h3 className='headerHome'>Instructions:</h3>
                    <p>
                        Click Draw to go to the Draw page. Choose your timer
                        setting, then choose your colors and brush size at the
                        bottom of the screen.
                        <br />
                        Undo or Clear when you need and Download your image when
                        you're finished!
                    </p>
                    <h3 className='headerHome'>Technologies:</h3>
                    <p>
                        Quick on the Draw was build with React.js and
                        react-canvas-draw. Tailwind.css and Craco were used for
                        styling. It is deployed on Netlify.
                    </p>
                </div>
                <div className='cactusContainer'>
                    <img src={cactus} alt='Cactus logo' className='cactus' />
                </div>
            </section>
            <AboutCards />
        </main>
    );
};

export default Home;
