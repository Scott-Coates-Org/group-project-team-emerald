import { Outlet } from 'react-router-dom';
import TopBar from 'components/appbar/Appbar';
import { Container } from '@mui/material';

const User = () => {
  return (
    <>
      <Container sx={{ marginTop: '5em' }}>
        <TopBar />

        <Outlet />
      </Container>
    </>
  );
};

export { User };
