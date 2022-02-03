import { render, screen } from '@testing-library/react';
import Canvas from '../../containers/Canvas';
import React from 'react';

describe('Canvas page tests', () => {
    it('looks for the navbar on the Canvas page', async () => {
        render(<Canvas />);

        const save = await screen.findByAltText('Save Button');
        expect(save).toMatchSnapshot();
    });
});
