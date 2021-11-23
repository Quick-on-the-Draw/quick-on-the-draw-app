// import { getDrawings } from '../utils/apiFetch';
import React, { useEffect, useState } from 'react';
import GalleryButtons from '../components/Gallery/GalleryButtons';
import GalleryList from '../components/Gallery/GalleryList';
import './styles/Gallery.css';

const Gallery = () => {
    const [loading, setLoading] = useState(true);
    const [drawings, setDrawings] = useState([]);
    const [timerFilter, setTimerFilter] = useState(5);

    useEffect(() => {
        const drawingFetch = [
            {
                id: 1,
                title: 'Seed Drawing 1',
                createdDate: '1999-01-09T08:00:00.000Z',
                timerSetting: 10,
                url: 'google.com',
            },
            {
                id: 2,
                title: 'Seed Drawing 2',
                createdDate: '1999-01-10T08:00:00.000Z',
                timerSetting: 5,
                url: 'google.com',
            },
        ];
        async function settingDrawingState() {
            await setDrawings(drawingFetch);
            setLoading(false);
        }
        settingDrawingState();
    }, [timerFilter]);

    // WHEN BACK END IS WORKING USE BELOW AND REMOVE ABOVE
    // useEffect(() => {
    //     setLoading(true);
    //     getDrawings()
    // do a filter here?
    //         .then((drawingFetch) => {
    //             setDrawings(drawingFetch);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [timerFilter]);

    function handleTimeChange(e) {
        async function setTimerState() {
            await setLoading(true);
            setTimerFilter(e.target.value);
            setLoading(false);
        }
        setTimerState();
    }

    if (loading) return 'LOADING';

    return (
        <main className='mainSection'>
            <h1>Gallery Page</h1>
            <GalleryButtons handleTimeChange={handleTimeChange} />
            <GalleryList drawings={drawings} />
        </main>
    );
};

export default Gallery;
