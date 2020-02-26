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
import Step3 from './Step3';

const userStyle = makeStyles(style);

const CustomStepper = ({
  editorNameId, isValied, ...others
}) => {
  const classes = userStyle();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select an editor', 'Create an article', 'Create an ad'];

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            editorNameId={editorNameId}
            {...others}
          />
        );
      case 1:
        return <Step2 {...others} />;
      case 2:
        return <Step3 {...others} />;
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
        <Button disabled={activeStep === 2 ? true : (!editorNameId && !isValied)} onClick={handleNext} variant="outlined" color="primary" className={classes.nextButton}>{activeStep === 2 ? 'Finish' : 'Next'}</Button>
      </Grid>
      {getStepContent(activeStep)}
    </div>
  );
};

CustomStepper.propTypes = {
  isValied: PropTypes.bool.isRequired,
  editorNameId: PropTypes.string.isRequired,
};

export default CustomStepper;
