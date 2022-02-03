import { render, screen } from '@testing-library/react';
import Home from '../../containers/Home';
import React from 'react';

describe('home page tests', () => {
    it('looks for the navbar on the Home page', async () => {
        render(<Home />);

        const logo = await screen.findAllByAltText('Quick on the Draw');
        expect(logo).toMatchSnapshot();
    });
});
