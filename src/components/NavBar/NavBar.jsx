import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthNavList from "./AuthNavList.jsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";
import UserNavList from "./UserNavList.jsx";
import { logOut } from "../../redux/auth/operations.js";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 my-5">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            PHONE BOOK
          </Typography>
          {name && (
            <Typography className="mr-4 cursor-pointer py-1.5 font-bold">
              Welcome {name}
            </Typography>
          )}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              {isLoggedIn ? <UserNavList /> : <AuthNavList />}
            </div>
            {isLoggedIn && (
              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={() => dispatch(logOut())}
                >
                  <span>Log Out</span>
                </Button>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {isLoggedIn ? <UserNavList /> : <AuthNavList />}
            {isLoggedIn && (
              <div className="flex items-center gap-x-1">
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  onClick={() => dispatch(logOut())}
                >
                  <span>Log Out</span>
                </Button>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
