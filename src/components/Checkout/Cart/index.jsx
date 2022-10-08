import { Box, Card, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styled from '@emotion/styled';
import theme from 'theme';

export function Cart() {
  const Row = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const date = 'Sept-20-22';

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
    { label: 'subTotal', calc: (...arg) => 'test' },
    { label: 'Transaction Fee', calc: (...arg) => 'test' },
    { label: 'Tax', calc: (...arg) => 'test' },
    { label: 'Total(Inc. Tax)', calc: (...arg) => 'test' },
  ];

  const list = [product, addOn];

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: theme.spacing(40),
        borderRadius: theme.spacing(1),
        padding: theme.spacing(5),
        margin: theme.spacing(5),
      }}
    >
      <Box key="header" fullWidth>
        <Typography>Your Cart</Typography>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <CalendarMonthIcon />
          <span>{date}</span>
        </Box>
      </Box>
      <Box style={{ width: '100%' }}>
        {list.map(({ name, unit, price }) => {
          return (
            <Row key={name}>
              <Typography>
                {unit} X {name}
              </Typography>
              <Typography>{price}</Typography>
            </Row>
          );
        })}
      </Box>
      <Box fullWidth sx={{ display: 'column', width: '100%' }}>
        <Typography>Total</Typography>
        {total.map(({ label, calc }) => {
          return (
            <Row key={label}>
              <Typography>{label}</Typography>
              <Typography>{calc()}</Typography>
            </Row>
          );
        })}
      </Box>
    </Card>
  );
}
