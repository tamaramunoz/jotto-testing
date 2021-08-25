import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />)
}

test('render without error ', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expeted props', () => {
    checkProps(Input, { secretWord: 'party' });
});

// describe('', () => {
//     let wrapper
//     beforeEach(() => {
//         wrapper = setup({ guessedWords: [] });
//     });

//     test('renders without error', () => {
//         const component = findByTestAttr(wrapper, 'component-input');
//         expect(component.length).toBe(1);
//     });
// });
