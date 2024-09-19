import NavBar from "../NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}
