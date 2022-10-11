import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/system/Unstable_Grid';
import { Card, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { PageLoader } from 'components/PageLoader';
import { StepNavigation } from 'components/Checkout/StepNavigation';
import { StepCounter } from 'components/Checkout/StepCounter';
import { Cart } from 'components/Checkout/Cart';

const DatePicker = lazy(() => import('components/Checkout/DatePicker'));
const Product = lazy(() => import('components/Checkout/Product'));
const ContactDetail = lazy(() => import('components/Checkout/ContactDetail'));
const Waiver = lazy(() => import('components/Checkout/Waiver'));
const CheckoutForm = lazy(() => import('components/Checkout/PaymentDetail'));

export default function Checkout() {
  const theme = useTheme();
  const { step } = useSelector(state => state.checkout);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Suspense fallback={<PageLoader />}>
            <Card
              sx={{
                borderRadius: theme.spacing(1),
                padding: theme.spacing(4),
                paddingTop: theme.spacing(1),
              }}
            >
              <StepCounter />

              <Box
                sx={{
                  marginTop: theme.spacing(2),
                }}
              >
                {step === 1 && <DatePicker />}
                {step === 2 && <Product />}
                {step === 3 && <Product />}
                {step === 4 && <ContactDetail />}
                {step === 5 && <Waiver />}
                {step === 6 && <CheckoutForm />}
              </Box>

              <StepNavigation />
            </Card>
          </Suspense>
        </Grid>

        <Grid xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
