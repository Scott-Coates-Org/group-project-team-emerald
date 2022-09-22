import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import TopBar from '../../components/appbar/Appbar';

const User = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TopBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '4em' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export { User };
