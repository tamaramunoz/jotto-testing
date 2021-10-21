import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../test/testUtils';
import { Provider } from 'react-redux';

import Input from './Input';
const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}));

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}, secretWord = 'party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input secretWord={secretWord} /></Provider>);
}

describe('render', () => {
    describe('success is true', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({ success: true });
        });

        test('render without error ', () => {
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('input box does not show ', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });

        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        });
    });

    describe('success is false', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({ success: false });
        });

        test('render without error ', () => {
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('input box show ', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        test('submit button show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
});


test('does not throw warning with expeted props', () => {
    checkProps(Input, { secretWord: 'party' });
});


describe('state contolled input field', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ success: false });
    });

    test('state updates with value of input box upon change', () => {
        // // this is when we do not destructuring our React.useState();
        // const mockSetCurrentGuess = jest.fn();
        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is cleared upon submit button click', () => {
        const button = findByTestAttr(wrapper, 'submit-button');

        button.simulate('click', { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});
