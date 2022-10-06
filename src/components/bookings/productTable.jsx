import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function productTable() {
  return (
    <Table sx={{ width: '100%' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell align="right">Qty</TableCell>
          <TableCell align="right">Booking Time</TableCell>
          <TableCell align="right">Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            Product Name
          </TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">14.00</TableCell>
          <TableCell align="right">90.00</TableCell>
        </TableRow>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            Product Name
          </TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">14.00</TableCell>
          <TableCell align="right">90.00</TableCell>
        </TableRow>
      </TableBody>

      <TableRow sx={{ borderTop: '1.5px solid black' }}>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell align="right">200</TableCell>
      </TableRow>
    </Table>
  );
}
