import { render, screen } from '@testing-library/react';
import Home from '../../containers/Home';
import React from 'react';

describe.skip('home page tests', () => {
    it('looks for the navbar on the Home page', async () => {
        render(<Home />);

        const navbar = await screen.findByText('Home');
        expect(navbar).toMatchSnapshot();
    });
});
