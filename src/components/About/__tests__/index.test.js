import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import About from '..';

// ensures that after each test, we wont have any leftover memory data that could give us false results
afterEach(cleanup);

// declares the components were testing
describe('About component', () => {
    //renders About test
    //first test
    // first argument (string) declares what is being tested
    //second argument is a callback function that runs the test
    it('renders', () => {
        render(<About />);
    });

    //second test
    it('matches snapshot FOM node structure', () => {
        //about About
        const { asFragment } = render(<About />);
        // asserts that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})

// will create a snapshot folder that will serve as the base model of the components structure
// will be compared against the new snapshots that are created by the asFragment function
// when needing to update the snapshot, use the command u in the terminal