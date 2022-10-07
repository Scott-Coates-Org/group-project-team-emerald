import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Outlet } from 'react-router-dom';

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

export default function Info({ bookings }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Booking Date</StyledTableCell>
              <StyledTableCell>Confirmation Id</StyledTableCell>
              <StyledTableCell>Session Times</StyledTableCell>
              <StyledTableCell>Headcount</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Booking Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(item => {
              return (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>{item.bookingDate}</StyledTableCell>
                  <StyledTableCell>
                    <Link to={`${item.confirmationId}`}>
                      {item.confirmationId}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>
                    {item.sessionStart} <span>{item.sessionEnd}</span>
                  </StyledTableCell>
                  <StyledTableCell>{item.headCount}</StyledTableCell>
                  <StyledTableCell>{item.amount}</StyledTableCell>
                  <StyledTableCell>{item.contactName}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Outlet />
    </>
  );
}
