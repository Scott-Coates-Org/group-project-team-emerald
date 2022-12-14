import {
  Accordion,
  AccordionSummary,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
const drawerWidth = 240;
//list items side bar
const listItem = [
  {
    name: 'Products',
    subLink: {
      sub: { name: 'All Products', linkTo: '/admin/products' },
      sub1: { name: 'Add Product', linkTo: '/admin/addProducts' },
    },
  },
  {
    name: 'Bookings',
    subLink: {
      sub: { name: 'All Bookings', linkTo: '/admin/bookings' },
      sub1: { name: 'Daily Capacity', linkTo: 'admin/dailycapacity' },
    },
  },
  {
    name: 'Rooms',
    subLink: {
      sub: { name: 'All Room', linkTo: '/admin/rooms' },
      sub1: { name: 'Add Room', linkTo: '/admin/rooms/add' },
    },
  },
];

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listItem.map((item, index) => (
              <Accordion key={item.name}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.name}
                </AccordionSummary>
                <ListItem disablePadding sx={{ flexDirection: 'column' }}>
                  <Link
                    to={item.subLink.sub.linkTo}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      width: '100%',
                    }}
                  >
                    <ListItemButton sx={{ width: '100%' }}>
                      <ListItemIcon />
                      <ListItemText primary={item.subLink.sub.name} />
                    </ListItemButton>
                  </Link>
                  <Link
                    to={item.subLink.sub1.linkTo}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      width: '100%',
                    }}
                  >
                    <ListItemButton sx={{ width: '100%' }}>
                      <ListItemIcon />
                      <ListItemText primary={item.subLink.sub1.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </Accordion>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
