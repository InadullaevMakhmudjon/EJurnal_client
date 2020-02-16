import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import MaterialAlert from '@material-ui/lab/Alert';

const Alert = ({ onClose, message, open }) => (
  <Slide direction="up" in={open} mountOnEnter unmountOnExit>
    <MaterialAlert elevation={6} variant="filled" severity="error" onClose={onClose}>{message}</MaterialAlert>
  </Slide>
);

const Error = ({ message, onClose, open }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
    <Alert onClose={onClose} severity="error" message={message} open={open} />
  </Snackbar>
);

Alert.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Error;
