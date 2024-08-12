import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import SignIn from "./SignIn";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log("Header render");
  const isOnline = useOnline();

  return (
    <div className="bg-black text-white shadow-lg border-solid border-2 flex justify-between items-center p-4">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-bold font-mono text-xl m-2 hover:text-blue-500">
          Logo
        </h1>
      </Link>
      {/* Nav-Links */}
      <ul className="flex">
        <Link to="/">
          <li className="p-2 hover:text-blue-500">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-2 hover:text-blue-500">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="p-2 hover:text-blue-500">Contact</li>
        </Link>
        <Link to="/instamart">
          <li className="p-2 hover:text-blue-500">Instamart</li>
        </Link>
      </ul>
      {/* Online/Offline */}
      {isOnline ? <p>🟢 Online</p> : "🔴 Offline"}
      {/* Login/Logout */}
      {isLoggedIn ? (
        <>
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            class="border-2 bg-black text-white border-white rounded-lg p-2 hover:bg-white hover:border-black hover:text-black"
            type="button"
          >
            Login
          </button>
        </>
      ) : (
        <button
          className="border-2 bg-black text-white border-white rounded-lg p-2 hover:bg-white hover:border-black hover:text-black"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
