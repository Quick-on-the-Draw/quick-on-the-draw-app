import React from 'react';
import kb from '../../assets/KB.jpg';
import nicole from '../../assets/Nicole.jpg';
import kat from '../../assets/Kat.jpg';
import './styles/AboutCards.css';

const AboutCards = () => {
    return (
        <main className='main'>
            <h1 className='header'>Async Studios</h1>
            <div className='aboutSection'>
                <div className='card'>
                    <h2 className='name'>Katy (KB) Boyles</h2>
                    <img src={kb} alt='KB' className='bioPic' />
                    <p className='bio'>
                        KB is a full stack software developer with a background
                        in Product Management. Located in Portland, OR, she
                        enjoys travelling and dancing. She loves working with
                        technology and works to create community wherever she
                        goes.
                    </p>
                    <div className='links'>
                        <a
                            href='https://twitter.com/KBtrizay'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a
                            href='https://github.com/katrinkajb'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fab fa-github'></i>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/katy-boyles/'
                            target='_blank'
                            rel='noreferrer'
                            className='linkedIn'
                        >
                            {/* <img src={kb} alt='LinkedIn' /> */}
                            <i class='fab fa-linkedin-in'></i>
                        </a>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='name'>Nicole Martin</h2>
                    <img src={nicole} alt='Nicole' className='bioPic' />
                    <p className='bio'>
                        Nicole is a full stack software engineer located in
                        Portland, OR. She enjoys working with computers and
                        collaborating on fun and impactful projects that will
                        help the planet, animals, and all humans. Also a huge
                        fan of vegan food, coffee and being outside in the
                        beautiful Pacific Northwest with her dogs, Cooper and
                        Ruby.
                    </p>
                    <div className='links'>
                        <a
                            href='https://twitter.com/nmartinpdx'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a
                            href='https://github.com/nicole-m-martin'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fab fa-github'></i>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nicolemartinpdx/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fab fa-linkedin-in'></i>
                        </a>
                        <a href='https://www.nicolemartin.dev/'>
                            <i class='fas fa-grin-alt'></i>
                        </a>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='name'>Kat Sauma</h2>
                    <img src={kat} alt='Kat' className='bioPic' />
                    <p className='bio'>
                        As an artist and a technical mind, Kat found their love
                        of graphic + ux/ui design through programming web
                        applications. They continue sharpening both ends of the
                        tech-pencil with original illustrations, choreographing
                        pathways of art and technology in performance, and
                        creative coding with Javascript libraries. Kat is a
                        dancer and costume designer and loves to cozy up with
                        their pup Chi Chi in the Big Apple.
                    </p>
                    <div className='links'>
                        <a
                            href='https://twitter.com/luckykatcodes'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a
                            href='https://github.com/kat-sauma'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fab fa-github'></i>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/kat-sauma/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fab fa-linkedin-in'></i>
                        </a>
                        <a
                            href='https://socketjockey.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i class='fas fa-music'></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutCards;
