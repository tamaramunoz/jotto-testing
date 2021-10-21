import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = useState("");
    const success = useSelector(state => state.success);

    if (success) {
        return <div data-test="component-input" />
    }

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
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentGuess("")
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}



export default Input;
