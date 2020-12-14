import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Button from '@material-ui/core/Button'

/**
 * Primary UI component for user interaction
 */
export const MuiButton = ({ label, ...props }) => {
  return (
    <Button
      {...props}
    >
      {label}
    </Button>
  );
};

MuiButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MuiButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
