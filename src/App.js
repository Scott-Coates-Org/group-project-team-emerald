import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/product/product";
import Login from "./pages/login/Login";
import AdminHome from "./pages/admin/index";
import Homepage from "./pages/customer/homepage/homepage";
import Checkout from "./pages/customer/checkout/checkout";
import AdminLayout from "./components/adminLayout";
import UserLayout from "./components/userLayout";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.auth.user);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Admin routes */}
      <Route element={<AdminLayout />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <AdminHome />
            </RequireAuth>
          }
        />
        <Route
          path="products"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
      </Route>

      {/* Customer Routes */}
      <Route element={<UserLayout />}>
        <Route path="homepage" element={<Homepage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
