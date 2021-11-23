import { render, screen } from '@testing-library/react';
import Canvas from '../../containers/Canvas';
import React from 'react';

describe.skip('Canvas page tests', () => {
    it('looks for the navbar on the Canvas page', async () => {
        render(<Canvas />);

        const navbar = await screen.findByText('Home');
        expect(navbar).toMatchSnapshot();
    });
});
