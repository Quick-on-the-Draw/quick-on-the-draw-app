import React from 'react';
import './styles/GalleryButtons.css';

const GalleryButtons = ({ handleTimeChange }) => {
    return (
        <form className='formBtn' onChange={handleTimeChange}>
            <h1>Change to see drawings from different timer settings</h1>
            <input
                className='radio'
                id='1'
                type='radio'
                name='time'
                value='1'
            />
            <label className='labels' htmlFor='1'>
                1
            </label>
            <input
                className='radio'
                id='5'
                type='radio'
                name='time'
                value='5'
                defaultChecked='checked'
            />
            <label className='labels' htmlFor='5'>
                5
            </label>
            <input
                className='radio'
                id='10'
                type='radio'
                name='time'
                value='10'
            />
            <label className='labels' htmlFor='10'>
                10
            </label>
        </form>
    );
};

export default GalleryButtons;
