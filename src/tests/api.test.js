import { addDrawing, getDrawings } from '../utils/apiFetch';

describe.skip('Api tests', () => {
    const newDrawing = {
        title: 'Test Drawing 1',
        createdDate: '1999-01-09T08:00:00.000Z',
        timerSetting: 5,
        url: 'google.com',
    };

    beforeEach(async () => {
        await addDrawing(newDrawing);
    });

    it('calls the addDrawing function', async () => {
        const newDrawing2 = {
            title: 'Test Drawing 2',
            createdDate: '1999-01-09T08:00:00.000Z',
            timerSetting: 1,
            url: 'github.com',
        };

        const res = await addDrawing(newDrawing2);

        expect(res.body).toEqual({
            title: 'Test Drawing 1',
            createdDate: '1999-01-09T08:00:00.000Z',
            timerSetting: 5,
            url: 'google.com',
        });
    });

    xit('calls the getDrawings function', async () => {
        const res = await getDrawings();

        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: 'Test Drawing 1',
                    createdDate: '1999-01-09T08:00:00.000Z',
                    timerSetting: 5,
                    url: 'google.com',
                }),
            ])
        );
    });
});
