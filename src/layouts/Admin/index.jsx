import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import TopBar from "../../components/appbar/Appbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <TopBar />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "4em" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export { Admin };
