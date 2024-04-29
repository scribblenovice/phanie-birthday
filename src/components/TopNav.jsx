import { useState } from "react";
import src from "../assets/profile-pic/test.jpg";
const TopNav = () => {
    const [focus, setFocus] = useState(false)
  return (
    <div className="min-h-[80px] border shadow-lg rounded-3xl bg-white">
      <div className="flex items-center justify-between h-full w-[95%] mx-auto">
        <div className="flex justify-around items-center w-[20%] h-[80%]">
          <div className="text-2xl ubuntu tracking-wider font-black">
            <span className="text-orange-500 poppins text-3xl">M</span>ira
          </div>
          <button className="relative">
            <i className="ri-notification-3-line text-2xl"></i>
            <div className="absolute bg-green-500 rounded-full p-1 text-xs -bottom-2 text-white left-3">10+</div>
          </button>
        </div>
        <div className={`border-[1px] rounded-[40px] px-3 w-[30%] h-[75%] flex items-center ${focus? "border-green-400" : "border-gray-400"}`}>
          <button className="text-gray-400">
            <i className="ri-search-line text-xl"></i>
          </button>
          <input
            type="text"
            className="h-[60%] w-full pl-2 focus:outline-none"
            placeholder="Search"
            onFocus={()=>setFocus(true)}
            onBlur={()=>setFocus(false)}
          />
        </div>
        <div className="flex items-center justify-around w-[20%] h-[80%]">
          <button>
            <i className="ri-notification-3-line text-xl"></i>
          </button>
          <div className="flex items-center">
            <img
              src={src}
              alt=""
              className="w-10 h-10 rounded-full border-[2px] border-green-400 mr-2"
            />
            <div className="poppins">Agba Dev</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default TopNav;
