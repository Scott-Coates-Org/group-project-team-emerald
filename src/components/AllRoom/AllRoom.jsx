import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getCollection } from '../../utils/firebase';

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

export default function AllRoom() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const rooms = await getCollection('rooms');
      console.log(rooms);
      setRows(rooms);
    }

    fetchData();
  }, []);

  if (!rows.length) return <div>Loading...</div>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Capacity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ imgUrl, capacity, name }) => (
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
                  referrerPolicy="no-referrer"
                  src={imgUrl}
                  alt={'product_img'}
                  style={{ width: '60px', height: '50px', objectFit: 'cover' }}
                />
                {name}
              </StyledTableCell>
              <StyledTableCell align="right">{capacity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
