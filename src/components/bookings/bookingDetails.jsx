import ProductTable from './productTable';
import { Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Dummy from './dummySign.png';

export default function Booking() {
  const { confirmationId } = useParams();

  return (
    <>
      <Paper elevation={0} sx={{ maxWidth: 600, padding: '1em' }}>
        <Typography variant="h5" sx={{ margin: '1em 0', fontWeight: 'bold' }}>
          Booking Details
        </Typography>
        <Typography variant="span">
          Confirmation ID# {confirmationId}
        </Typography>
        <Typography variant="h6" sx={{ margin: '1em 0' }}>
          Order Details
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Booking Date:
        </Typography>

        <ProductTable />
        <Typography variant="h6" sx={{ margin: '1em 0' }}>
          Customer Information{' '}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          FullName: John Doe
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Email: johndoe@test.com
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Address: 123 test drive, test district, test city
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Mobile Number: 01-234-456-87
        </Typography>
        <Typography variant="h6" sx={{ margin: '1em 0' }}>
          Waiver Details
        </Typography>
        <Typography variant="h7" gutterBottom>
          Signed: Yes
        </Typography>
        <Box
          sx={{
            p: 4,
            margin: '1em 0',
            width: '100%',
            border: '1px dashed grey',
            borderRadius: '3px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Dummy} alt="dummy-signature" style={{ width: '100%' }} />
        </Box>
      </Paper>
    </>
  );
}
