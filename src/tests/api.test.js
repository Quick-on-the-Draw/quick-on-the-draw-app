import { addDrawing } from '../utils/apiFetch';

describe('Api tests', () => {
    it('calls the addDrawing function', async () => {
        const newDrawing = {
            title: 'Test Drawing 1',
            createdDate: '1999-01-09T08:00:00.000Z',
            timerSetting: 5,
            url: 'google.com',
        };

        const res = await addDrawing(newDrawing);

        expect(res.body).toEqual({
            title: 'Test Drawing 1',
            createdDate: '1999-01-09T08:00:00.000Z',
            timerSetting: 5,
            url: 'google.com',
        });
    });
});
