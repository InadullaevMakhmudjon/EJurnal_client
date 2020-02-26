import React from 'react';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import PropTypes from 'prop-types';

const Step3 = ({ languageId }) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:3030';

  const getUrl = () => {
    switch (languageId) {
      case 0: return `${baseUrl}/files/template-en.pdf`;
      case 1: return `${baseUrl}/files/template-ru.docx`;
      default: return '';
    }
  };

  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Alert severity="info" href="google.com" onClick={() => window.open(getUrl())} style={{ cursor: 'pointer' }}>
          <AlertTitle>Download template first</AlertTitle>
        </Alert>
      </Grid>
    </Grid>
  );
};

Step3.propTypes = {
  languageId: PropTypes.number.isRequired,
};

export default Step3;
