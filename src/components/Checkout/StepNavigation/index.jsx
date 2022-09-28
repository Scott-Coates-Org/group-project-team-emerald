import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button } from '@mui/material';
import { setStep } from 'redux/checkoutSlice';

export const StepNavigation = () => {
  const dispatch = useDispatch();

  const { step } = useSelector(state => state.checkout);

  const gotoStep = useCallback(
    _step => {
      dispatch(setStep(parseInt(_step)));
    },
    [dispatch]
  );

  return (
    <Stack mt={2} spacing={2} direction="row" justifyContent="center">
      {step === 6 ? (
        <Button
          variant="contained"
          sx={{ width: '50%' }}
          onClick={() => alert('Checkout')}
        >
          Checkout
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ width: '50%' }}
          onClick={() => gotoStep(step + 1)}
        >
          Next
        </Button>
      )}
      {step !== 1 && (
        <Button
          variant="outlined"
          sx={{ width: '50%' }}
          onClick={() => gotoStep(step - 1)}
        >
          Back
        </Button>
      )}
    </Stack>
  );
};
