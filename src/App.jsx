import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNav from "./components/TopNav";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="w-[97%] mx-auto flex flex-col gap-y-3 py-3 h-screen overflow-hidden">
        <TopNav />
        <Dashboard/>
    </div>
  );
}

export default App;
