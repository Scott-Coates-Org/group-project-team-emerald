import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function Info() {
  return (
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
            <StyledTableCell>Contact Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>30 August 2022</StyledTableCell>
            <StyledTableCell>1232454343</StyledTableCell>
            <StyledTableCell>
              12:30 <span>1:30</span>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>84.50</StyledTableCell>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>001-1221-6678</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
