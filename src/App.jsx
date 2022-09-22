import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AdminLayout from './components/adminLayout';
import UserLayout from './components/userLayout';

const Products = lazy(() => import('./pages/product/product'));
const Login = lazy(() => import('./pages/login/Login'));
const AdminHome = lazy(() => import('./pages/admin/index'));
const Homepage = lazy(() => import('./pages/customer/homepage/homepage'));
const Checkout = lazy(() => import('./pages/customer/checkout/checkout'));
const AddRoom = lazy(() => import('./components/AddRoom/AddRoom'));
const AddProduct = lazy(() => import('./components/AddProduct/AddProduct'));

function App() {
  const currentUser = useSelector(state => state.auth.user);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin/login" />;
  };

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminHome />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/addProducts"
            element={
              <RequireAuth>
                <AddProduct />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/rooms/add"
            element={
              <RequireAuth>
                <AddRoom />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/rooms"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
        </Route>

        {/* Customer Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
