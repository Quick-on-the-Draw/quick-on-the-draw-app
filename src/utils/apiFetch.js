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

export async function getDrawings() {
    const res = await fetch(
        'https://quick-on-the-draw-be.herokuapp.com/api/v1/drawings'
    );
    const json = await res.json();
    return json;
}
