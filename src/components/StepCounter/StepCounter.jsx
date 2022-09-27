import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StepCounter = ({ currStep = 5, totalStep = 6 }) => {
    return (
        <>
            <Box sx={{width: '50%'}}>
            <Typography variant="h6" component="div">
                Step {currStep} out of {totalStep}
            </Typography>
                <LinearProgress variant="determinate" value={Math.round((100 / totalStep) * currStep)} />
            </Box>
        </>
    );
};

export default StepCounter;
