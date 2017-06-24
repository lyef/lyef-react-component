import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ name }) => (
    <h1>Hello {name}!</h1>
);

Component.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Component;
