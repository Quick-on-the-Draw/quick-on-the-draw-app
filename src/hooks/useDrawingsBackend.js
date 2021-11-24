import { useState, useEffect } from 'react';
import { getDrawings } from '../utils/apiFetch';

// Custom hook for fetching drawings from backend

export const useDrawingsBackend = () => {
  const [loading, setLoading] = useState(true);
  const [drawings, setDrawings] = useState([]);
  const [timerFilter, setTimerFilter] = useState();

  // WHEN BACK END IS WORKING USE BELOW AND REMOVE ABOVE
  useEffect(() => {
    setLoading(true);
    getDrawings(timerFilter)
      // do a filter here?
      .then((drawings) => setDrawings(drawings))
      .finally(() => setLoading(false))
      .catch((error) => console.log('Error fetching drawings', error));
  }, [timerFilter]);

  return {
    loading,
    setLoading,
    drawings,
    setDrawings,
    timerFilter,
    setTimerFilter,
  };
};
