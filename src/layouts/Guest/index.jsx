import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

const Guest = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export { Guest };
