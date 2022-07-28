import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
 FormGroup, withStyles
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { textAlign } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "",
    "",
    "",
    "",
  ];
}

const StyledTextField = withStyles({
  root: {
    "& fieldset": {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      width: 270
      
    }
  }
})(TextField);

const StyledButton = withStyles({
  root: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    textTransform: "lowercase",
    height: 52,
    marginTop: 17
  }
})(Button);

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="userOne">
       <div className="heading">
        <h1 className="head" >Welcome! First things first...</h1>
        <p>You Can always change them later</p>
       </div>
         <div className="textarea">
          <TextField
            id="Full Name"
            label="Full Name"
            variant="outlined"
            className="textfild"
            placeholder="Steve Jobs"
            margin="normal"
           
          />
          <TextField
            id="Display Name"
            label="Display Name"
            className="textfild"
            variant="outlined"
            placeholder="Steve"
            margin="normal"
          />
         </div>
        </div> 
      );

    case 1:
      return (
        <div className="Home">
          <div className='heading'>
            <h1 className="head">Lets set up a home for all your work</h1>
            <p className="subHead"> You can always create another WorkSpace Later.</p>
          </div>
          <div className="textarea">
          <TextField
            id="WorkSpace"
            label="Workspace Name"
            variant="outlined"
            placeholder="Eden"
            margin="normal"
            className="textfild"
            name="Workspace Name"
          />
          <FormGroup row>
      <StyledButton variant="contained" disableElevation>
        @example.com
      </StyledButton>
      <StyledTextField variant="outlined" 
       placeholder="Example" 
       label="Workspace Name"
       margin="normal"
       />
    </FormGroup>
          
         </div>
        </div>
      );
    case 2:
      return (
         <div className="planing">
          <div className="heading">
           <h1 className="head"> How are you planing to use Eden</h1>
           <p className="subhead"> We'll Stramline your setup </p>
          </div>
          <div className="cardInfo" >
          <Button variant="outlined" className="btnmargin">
            <div className="card">
            <PersonIcon className="icon"/>
             <h3 className="myself">For MySelf</h3>
             <p className="cleartiy">write better Think More Cleartiy Organized</p>
             </div>
          </Button>
          <Button variant="outlined">
          <div className="card">
          <GroupsIcon/>
          <h3 className="myself">With My Teams</h3>
          <p className="cleartiy">Wikis Docs task & Project all in one Place</p>
          </div>
          </Button>

         </div>
        </div>
      );
    case 3:
      return (
        <div className="Congratulations">
          <span className="bgdot">
          <CheckRoundedIcon className="iconlogo"/>
          </span>
         <h1 className="congrats">Congratulations, Eren!</h1>
         <p className="eden">You have Completed Onboarding, You can start using the Eden</p>
        </div>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <div className="steper">
      <Stepper  alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
         
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <div className="buttombtn">
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            
          >
            back
          </Button>
         
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Launch Eden" : "Create Workspace"}
          </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;