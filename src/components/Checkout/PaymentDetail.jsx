import { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Typography, TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SelectField from '../common/Select';
import countries from '../../utils/country.json';

const Container = styled(Box)({
  padding: '20px',
  background: 'grey',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  border: 'solid black 4px',
  borderRadius: '4px',
  padding: '40px',
});

const Input = styled(TextField)({
  marginBottom: '24px',
});

export default function PaymentDetail() {
  const [ccNumber, setCC] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCVC] = useState('');
  const [country, setCountry] = useState('');

  const handleCreditCard = e => {
    setCC(e.target.value);
  };

  const handleExpiration = e => {
    setExpiration(e);
  };

  const handleCVC = e => {
    setCVC(e.target.value);
  };

  const handleCountry = e => {
    setCountry(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log({
      ccNumber,
      expiration,
      cvc,
      country,
    });
  };

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ fontSize: '24px', textAlign: 'left', padding: '20px' }}
      >
        Enter contact details
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Input
          name="Credit Card Number"
          placeholder="1234 1234 1234 1234"
          fullWidth
          label="Card Number"
          type="number"
          value={ccNumber}
          onChange={handleCreditCard}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              name="Expiry"
              label="Expiry"
              value={expiration}
              onChange={handleExpiration}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Input
            name="CVC"
            fullWidth
            label="CVC"
            type="number"
            value={cvc}
            onChange={handleCVC}
            sx={{ marginLeft: '8px' }}
          />
        </Box>
        <SelectField
          id="Country"
          name="country"
          value={country}
          options={countries}
          onChange={handleCountry}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%', marginBottom: '12px' }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            sx={{ width: '100%' }}
            onClick={() => console.log('handleGoBack')}
          >
            Back
          </Button>
        </Box>
      </Form>
    </Container>
  );
}
