import { drawDetailsFromBackend } from './dataUtils';
// import fetch from 'node-fetch';

export async function addDrawing(form) {
  const res = await fetch(
    'https://quick-on-the-draw-be.herokuapp.com/api/v1/drawings',
    form,
    {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  const json = await res.json();
  return json;
}

export const getDrawings = async () => {
  const res = await fetch(
    `https://quick-on-the-draw-be.herokuapp.com/api/v1/drawings`
  );
  const json = await res.json();
  const mungedData = drawDetailsFromBackend(json);

  return mungedData;
};
