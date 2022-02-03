import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) =>  ( 
    <h5 className="alert alert-danger error"> {mensaje} </h5>
 );

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

 
export default Error;