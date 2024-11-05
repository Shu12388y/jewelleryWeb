import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Rings</a>
              </li>
              <li>
                <a>Earringns</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src="/Logo_100.gif" className="w-14 h-14 pl-4" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Rings</a>
            </li>

            <li>
              <a href="">Earrings</a>
            </li>

            <li>
              <a>Bangles</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row gap-10">
            <a href="">
              <User />
            </a>
            <a href="">
              <Heart />
            </a>
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
