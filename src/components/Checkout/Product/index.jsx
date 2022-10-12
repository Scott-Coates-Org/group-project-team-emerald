import { Typography } from '@mui/material';
import ProdSelector from './prodSelector';

export default function Product() {
  const products = [1, 2, 3];

  return (
    <>
      <Typography variant="bolder">Select Products</Typography>

      {products.map(item => {
        return <ProdSelector key={item} />;
      })}
    </>
  );
}
