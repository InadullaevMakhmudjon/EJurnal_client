import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import style from 'assets/jss/components/author/create/stepper';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Step1 from './Step1';
import Step2 from './Step2';

const userStyle = makeStyles(style);

const CustomStepper = ({ editorId, editorNameId, ...others }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select an editor', 'Create an ad group', 'Create an ad'];

  const classes = userStyle();


  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            editors={[{ id: 0, name: 'None' }, { id: 1, name: 'ASd' }, { id: 2, name: 'PDS' }]}
            editorId={editorId}
            editorNameId={editorNameId}
            {...others}
          />
        );
      case 1:
        return <Step2 />;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep !== 2 ? prevActiveStep + 1 : prevActiveStep));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep !== 0 ? prevActiveStep - 1 : prevActiveStep));
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {
            steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))
      }
      </Stepper>
      <Grid container justify="space-around" className={classes.buttonContainer}>
        <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined" color="primary" className={classes.nextButton}>Back</Button>
        <Button disabled={!editorId && !editorNameId} onClick={handleNext} variant="outlined" color="primary" className={classes.nextButton}>{activeStep === 2 ? 'Finish' : 'Next'}</Button>
      </Grid>
      {getStepContent(activeStep)}
    </div>
  );
};

CustomStepper.propTypes = {
  editorId: PropTypes.string.isRequired,
  editorNameId: PropTypes.number.isRequired,
};

export default CustomStepper;
