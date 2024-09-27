import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/ Layout.jsx";
import Homepage from "./pages/HomePage/Homepage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Registration from "./pages/RegistrationPage/Registration.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { refreshUser } from "./redux/auth/operations.js";
import PrivateRoute from "./PrivateRoute.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refresh</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
