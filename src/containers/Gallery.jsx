// import { getDrawings } from '../utils/apiFetch';
import React from 'react';
import GalleryButtons from '../components/Gallery/GalleryButtons';
import GalleryList from '../components/Gallery/GalleryList';
import { useDrawingsBackend } from '../hooks/useDrawingsBackend';
import './styles/Gallery.css';

const Gallery = () => {
  const { loading, setLoading, drawings, setTimerFilter } =
    useDrawingsBackend();

  function handleTimeChange(e) {
    async function setTimerState() {
      await setLoading(true);
      setTimerFilter(e.target.value);
      setLoading(false);
    }
    setTimerState(setTimerFilter);
  }

  if (loading) return 'LOADING';

  return (
    <main className="mainSection">
      <h1>Gallery Page</h1>
      <GalleryButtons handleTimeChange={handleTimeChange} />
      <GalleryList drawings={drawings} />
    </main>
  );
};

export default Gallery;
