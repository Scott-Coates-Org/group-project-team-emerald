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
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const drawerWidth = 240;
//list items side bar
const listItem = [
  {
    name: "Products",
    subLink: {
      sub: { name: "All Products", linkTo: "products" },
      sub1: { name: "Add Product", linkTo: "/" },
    },
  },
  {
    name: "Bookings",
    subLink: {
      sub: { name: "Book 1", linkTo: "products" },
      sub1: { name: "Book 2", linkTo: "/" },
    },
  },
  {
    name: "Rooms",
    subLink: {
      sub: { name: "Room 1", linkTo: "products" },
      sub1: { name: "Room 2", linkTo: "/" },
    },
  },
];

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {listItem.map((item, index) => (
              <Accordion>
                <AccordionSummary
                  //   expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  key={index}
                >
                  {item.name}
                </AccordionSummary>
                <ListItem disablePadding sx={{ flexDirection: "column" }}>
                  <Link
                    to={item.subLink.sub.linkTo}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    <ListItemButton sx={{ width: "100%" }}>
                      <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      </ListItemIcon>
                      <ListItemText primary={item.subLink.sub.name} />
                    </ListItemButton>
                  </Link>
                  <Link
                    to={item.subLink.sub1.linkTo}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    <ListItemButton sx={{ width: "100%" }}>
                      <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      </ListItemIcon>
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
