import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import RequireAuth from './components/RequireAuth';

import { PageLoader } from './components/PageLoader';
import { Guest as LayoutGuest } from './layouts/Guest';
import { Admin as LayoutAdmin } from './layouts/Admin';
import { User as LayoutUser } from './layouts/User';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Products = lazy(() => import('./pages/product/product'));
const Login = lazy(() => import('./pages/login/Login'));
const AdminHome = lazy(() => import('./pages/admin/index'));
const Homepage = lazy(() => import('./pages/customer/homepage/homepage'));
const Checkout = lazy(() => import('./pages/customer/checkout/checkout'));
const AddRoom = lazy(() => import('./components/AddRoom/AddRoom'));
const AddProduct = lazy(() => import('./components/AddProduct/AddProduct'));

function App() {
  const { user } = useAuth();
  const Layout = user ? LayoutAdmin : LayoutGuest;

  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
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




          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
