import { Typography, LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const totalStep = 6;

export const StepCounter = () => {
  const { step: currStep } = useSelector(state => state.checkout);

  return (
    <>
      <Typography variant="light">
        Step {currStep} of {totalStep}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={Math.round((100 / totalStep) * currStep)}
      />
    </>
  );
};
