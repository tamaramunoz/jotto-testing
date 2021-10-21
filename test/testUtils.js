import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @param {object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - redux store.
 */

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attibute for search.
 *  * @returns {ShallowWrapper}
 *
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propType, 
        'prop',
        component.name
    )
    expect(propError).toBeUndefined();
}