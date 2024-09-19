import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/ Layout.jsx";
import Homepage from "./pages/HomePage/Homepage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Registration from "./pages/RegistrationPage/Registration.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
