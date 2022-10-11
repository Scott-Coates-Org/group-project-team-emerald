import { Box, Typography } from '@mui/material';
import ProdDesc from './prodDesc';
import ProdSelector from './prodSelector';

export default function Product() {
  const products = [];

  return (
    <>
      <Typography variant="bolder">Select Products</Typography>
      <div className="container">
        <ProdSelector />
      </div>
      <div className="container">
        <ProdDesc />
      </div>
      <div className="container">
        <ProdSelector />
      </div>
      <div className="container">
        <ProdSelector />
      </div>

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
