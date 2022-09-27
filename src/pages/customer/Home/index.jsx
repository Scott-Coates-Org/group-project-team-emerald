import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container, Button, Card, CardContent } from '@mui/material';

export default function Home() {
  const Navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, minHeight: 275 }}>
        <CardContent>Card Content</CardContent>
      </Card>

      <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => Navigate('/checkout')}
        >
          Buy Tickets
        </Button>
      </Box>
    </Container>
  );
}
