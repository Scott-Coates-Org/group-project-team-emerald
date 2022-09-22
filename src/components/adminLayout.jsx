import TopBar from './appbar/Appbar';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <TopBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '4em' }}>
        <Outlet />
      </Box>
    </div>
  );
}
