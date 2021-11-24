import { drawDetailsFromBackend } from './dataUtils';
// import fetch from 'node-fetch';

export async function addDrawing(drawing) {
  const res = await fetch(
    'https://quick-on-the-draw-be.herokuapp.com/api/v1/drawings',
    {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(drawing),
    }
  );
  const json = await res.json();
  return json;
}

export const getDrawings = async () => {
  const res = await fetch(
    `https://quick-on-the-draw-be.herokuapp.com/api/v1/drawings`
    // {
    //   crossDomain: true,
    // }
  );
  const json = await res.json();
  const mungedData = drawDetailsFromBackend(json);

  return mungedData;
};

// export async function saveDrawing(drawingTitle, createdDate, timerSetting) {
//     const dataUrl = canvasRef.current.toDataUrl()
//     const res = await fetch('https://quick-on-the-draw-be.herokuapp.com/api/vi/drawings', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: drawingTitle,
//             url: dataUrl,
//             createdDate: createdDate,
//             timerSetting: timerSetting

//         })
//     })
//     const json = await res.json();
//     return json;
// }
