import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PageLoader } from './components/PageLoader';
import { Guest as LayoutGuest } from './layouts/Guest';
import { Admin as LayoutAdmin } from './layouts/Admin';
import { User as LayoutUser } from './layouts/User';

const Products = lazy(() => import('./pages/product/product'));
const Login = lazy(() => import('./pages/login/Login'));
const AdminHome = lazy(() => import('./pages/admin/index'));
const Homepage = lazy(() => import('./pages/customer/homepage/homepage'));
const Checkout = lazy(() => import('./pages/customer/checkout/checkout'));
const AddRoom = lazy(() => import('./components/AddRoom/AddRoom'));
const AddProduct = lazy(() => import('./components/AddProduct/AddProduct'));

function App() {
  const currentUser = useSelector(state => state.auth.user);
  const Layout = currentUser ? LayoutAdmin : LayoutGuest;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin/login" />;
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Admin routes */}
        <Route element={<Layout />}>
          <Route path="/admin/login" element={<Login />} />
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
        <Route element={<LayoutUser />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
