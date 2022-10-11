import { Box, Typography } from '@mui/material';

export default function Product() {
  const products = [];

  return (
    <>
      <Typography variant="bolder">Select Products</Typography>

      {products.map(({ name, unit, price }) => {
        return (
          <Box key={name}>
            <Typography variant="light">
              {unit} X {name}
            </Typography>
            <Typography variant="light">{unit * price}</Typography>
          </Box>
        );
      })}
    </>
  );
}
