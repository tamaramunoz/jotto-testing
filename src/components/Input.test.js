import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
}

test('render without error ', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});
