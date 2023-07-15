import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { UserAuth } from "./context/UserContext";

const App = () => {
  const { user } = UserAuth();
  return (
    <div className="max-w-[728px] m-auto text-center p-4 lg:p-0 overflow-hidden">
      <section className="flex flex-col h-[90vh] mt-10 bg-gray-300 shadow-xl border relative">
        <Navbar></Navbar>
        {user && <Chat></Chat>}
      </section>
    </div>
  );
};

export default App;
