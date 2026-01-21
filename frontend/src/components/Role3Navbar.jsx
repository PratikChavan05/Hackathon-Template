import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

const Role3Navbar = () => {
  const { user } = UserData();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-lg font-bold text-purple-400">Role 3 Dashboard</div>
      <div className="flex items-center gap-6">
        <Link to="/role3" className="hover:text-purple-400">
          Overview
        </Link>
        <span className="text-sm text-gray-300">
          {user?.name} ({user?.role})
        </span>
      </div>
    </nav>
  );
};

export default Role3Navbar;

