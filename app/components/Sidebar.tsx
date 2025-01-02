import logo from "../assets/logo-dark.svg";
import { NavLink } from "react-router";

const Sidebar = ({ isToggled }: { isToggled: boolean }) => {
  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 lg:static w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
        isToggled ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="p-4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer w-full"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/setting"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer w-full"
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer w-full"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer w-full"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
