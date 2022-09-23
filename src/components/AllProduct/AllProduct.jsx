import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getCollection, getImgDownloadUrl } from '../../utils/firebase';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AllProduct() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await getCollection('products');
      console.log(products);

      const imgPromises = products.map(async product => {
        return getImgDownloadUrl(product.image);
      });

      Promise.all(imgPromises).then(imageData => {
        const data = products.map((product, indx) => ({
          name: product.name,
          productId: product.id,
          imgId: product[indx]?.imgId || '',
          imgUrl: imageData[indx]?.imgUrl || '',
          price: product.price || 0,
          type: product.type || '',
        }));

        setRows(data);
      });
    }

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ imgUrl, price, type, name }) => (
            <StyledTableRow key={name}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <img
                  referrerpolicy="no-referrer"
                  src={imgUrl}
                  alt="product "
                  style={{ width: '60px', height: '50px', objectFit: 'cover' }}
                />
                {name}
              </StyledTableCell>
              <StyledTableCell align="right">{price}</StyledTableCell>
              <StyledTableCell align="right">{type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
