import React, { Component } from 'react';
import PropTypes from 'prop-types';

// receives success as props

export default (props) => {
        if (props.success) {
            return (
                <div data-test="component-congrats">
                    <span data-test="congrats-message">
                        Congratulations! You guessed the word!
                    </span>
                </div>
                )
        } else {
            return (
                <div data-test="component-congrats" />

            )
        }
}