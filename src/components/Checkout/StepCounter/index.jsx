import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const totalStep = 6;

export const StepCounter = () => {
  const { step: currStep } = useSelector(state => state.checkout);

  return (
    <>
      <Box sx={{ width: '50%' }}>
        <Typography variant="h6" component="div">
          Step {currStep} out of {totalStep}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={Math.round((100 / totalStep) * currStep)}
        />
      </Box>
    </>
  );
};
