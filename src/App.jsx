import { useState } from "react";
import "./App.css";
import WaterwheelCarousel from "./pages/Carousel";
import src from "/birthday-bday.gif";
function App() {
  return (
    <div className="md:hidden max-w-screen max-h-screen flex flex-col">
      <h1 className="text-center text-white font-bold flex gap-4 justify-center mt-5">
        <i class="ri-heart-fill"></i>22/10/2024<i class="ri-heart-fill"></i>
      </h1>
      <WaterwheelCarousel />
      <div className="flex gap-3 items-center">
        <img className="w-16 h-16 rounded-full" src={src} alt="" />
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl font-bold glow">
            Happy Birthday Phanie!
          </h1>
          <p className="text-white text-center glow font-bold tracking-widest">Cheers to another year of being amazing🥂</p>
        </div>
      </div>
    </div>
  );
}

export default App;
