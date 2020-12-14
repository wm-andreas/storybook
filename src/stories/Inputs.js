import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

export const Inputs = ({...props}) => (<TextField variant="outlined" {...props}/>);
Inputs.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}
Inputs.defaults = {
    disabled: false,
    fullWidth: false
}