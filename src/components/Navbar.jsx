import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-no-background.png";
import { closeNavbar, logoutIcon, openNavbar } from "../helper/icons";
import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useAuthContext();
  const location = useLocation();
  return (
    <nav className="bg-[#3F7C85] md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://github.com/batumzff"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} width={60} height={60} alt="Batuhan" />
          </a>

          <div className="md:hidden">
            <button
              className="menu-btn text-white hover:text-[#00CCBF]"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-white font-medium  flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-[#00CCBF] rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "underline scale-125" : ""
                  }
                  `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-white hover:bg-[#00CCBF] hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
              onClick={logout}
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
