import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = useState("");

    return (
        <div data-test="component-input" >
            <form className="form-inline">
                <input
                    data-test="input-box"
                    type="text"
                    placeholder="Enter a word"
                    className="mb-2 mx-sm-3"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                />

                <button
                    data-test="submit-button"
                    className="btn btn-dark mb-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}



export default Input;
