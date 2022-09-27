import { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { PageLoader } from 'components/PageLoader';
import { StepNavigation } from 'components/Checkout/StepNavigation';
import { StepCounter } from 'components/Checkout/StepCounter';

const DatePicker = lazy(() => import('components/Checkout/DatePicker'));
const ContactDetail = lazy(() => import('components/Checkout/ContactDetail'));
const Waiver = lazy(() => import('components/Checkout/Waiver'));
const CheckoutForm = lazy(() => import('components/Checkout/PaymentDetail'));

export default function Checkout() {
  const { step } = useSelector(state => state.checkout);

  return (
    <>
      <Box sx={{ margin: '0 auto', width: '50%' }}>
        <StepCounter />

        <Suspense fallback={<PageLoader />}>
          {step === 1 && <DatePicker />}
          {step === 2 && <h1>step 2 - product selection</h1>}
          {step === 3 && <h1>step 3 - add on selection</h1>}
          {step === 4 && <ContactDetail />}
          {step === 5 && <Waiver />}
          {step === 6 && <CheckoutForm />}
        </Suspense>

        <StepNavigation />
      </Box>
    </>
  );
}
