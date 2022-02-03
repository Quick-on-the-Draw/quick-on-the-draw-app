import { render, screen } from '@testing-library/react';
import Gallery from '../../containers/Gallery';
import React from 'react';

describe.skip('Gallery page tests', () => {
    it('looks for the navbar on the Gallery page', async () => {
        render(<Gallery />);

        const navbar = await screen.findByText('Gallery Page');
        expect(navbar).toMatchSnapshot();
    });
});
