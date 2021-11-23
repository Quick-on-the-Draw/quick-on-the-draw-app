export async function addDrawing(drawing) {
    const res = await fetch(
        'https://quick-on-the-draw-be.herokuapp.com/api/vi/drawings',
        {
            method: 'POST',
            headers: { 'Content-Type': 'Application/JSON' },
            body: JSON.stringify(drawing),
        }
    );
    const json = await res.json();
    return json;
}

export async function getDrawings() {
    const res = await fetch(
        'https://quick-on-the-draw-be.herokuapp.com/api/vi/drawings'
    );
    const json = await res.json();
    return json;
}
