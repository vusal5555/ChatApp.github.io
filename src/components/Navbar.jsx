import React from "react";
import { UserAuth } from "../context/UserContext";

const Navbar = () => {
  const { user, signInWithGoogle, logOut } = UserAuth();

  return (
    <div className="flex items-center h-20 justify-between bg-gray-700 text-white p-4 ">
      <h1 className="text-3xl font-bold">Chat App</h1>

      <div>
        {user ? (
          <button
            onClick={() => logOut()}
            className="bg-gray-300 text-black px-4 py-2"
          >
            Log Out
          </button>
        ) : (
          <button
            className="bg-gray-300 text-black px-4 py-2"
            onClick={() => signInWithGoogle()}
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
