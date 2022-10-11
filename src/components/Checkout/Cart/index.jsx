import { Box, Card, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

export function Cart() {
  const theme = useTheme();

  const Row = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const date = 'October 12, 2022';

  const product = {
    name: 'Product Name',
    price: 30.0,
    unit: 3,
    booking: '14:00',
  };

  const addOn = {
    name: 'AddOn Name',
    price: 15.0,
    unit: 3,
  };

  const total = [
    { label: 'Subtotal', calc: (...arg) => '$90.00' },
    { label: 'Transaction Fee', calc: (...arg) => '$7.00' },
    { label: 'Tax', calc: (...arg) => '$4.85' },
  ];

  const list = [product, addOn];

  return (
    <Card
      sx={{
        borderRadius: theme.spacing(1),
        padding: theme.spacing(4),
      }}
    >
      <Box>
        <Typography variant="bolder">Your Cart</Typography>

        <Box sx={{ pt: theme.spacing(1), display: 'flex' }}>
          <CalendarMonthIcon />
          <Typography variant="light">{date}</Typography>
        </Box>
      </Box>

      <Box sx={{ pt: '1em' }} style={{ width: '100%' }}>
        {list.map(({ name, unit, price }) => {
          return (
            <Row key={name}>
              <Typography variant="light">
                {unit} X {name}
              </Typography>
              <Typography variant="light">${unit * price}</Typography>
            </Row>
          );
        })}
      </Box>

      <Box sx={{ pt: '2em', display: 'column', width: '100%' }}>
        <Typography variant="bolder">Total</Typography>

        {total.map(({ label, calc }) => {
          return (
            <Row key={label}>
              <Typography variant="light">{label}</Typography>
              <Typography variant="light">{calc()}</Typography>
            </Row>
          );
        })}
        
        <Row>
          <Typography variant="bolder">Total(Inc. Tax)</Typography>
          <Typography variant="bolder">$101.85</Typography>
        </Row>
      </Box>
    </Card>
  );
}
