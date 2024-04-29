import { useState } from "react";
import { sideBarLinks } from "../resources/MenuResource";
import RenderDashboard from "../components/RenderDashboard";
import TopStores from "../pages/home-page/TopStores";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <>
      <div className="w-full h-full flex justify-between bg-gray-100 rounded-2xl poppins font-medium">
        <div className="w-[19%] h-full">
          <div className="w-full bg-white rounded-2xl shadow-lg h-full overflow-y-scroll dashboard-content">
            <div className="max-h-10">
              <div className="flex gap-y-0 flex-col px-4 py-4">
                {sideBarLinks.map((el) => {
                  const { id, name, to, iconClass } = el;
                  return (
                    <div
                      key={id}
                      onClick={() => setActiveLink(id)}
                      className={`text-base hover:bg-orange-400 py-4 flex w-full cursor-pointer transition-all ease-linear duration-300 rounded-md ${
                        activeLink === id ? "bg-orange-400" : "bg-transparent"
                      }`}
                    >
                      <div className="px-5">
                        <i className={iconClass}></i>
                      </div>
                      <div>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="w-full h-full overflow-y-scroll bg-white rounded-2xl p-2 dashboard-content">
            <div className="h-[100%]">
              <RenderDashboard link={activeLink} />
            </div>
          </div>
        </div>
        <div className="w-[19%] h-full rounded-2xl overflow-y-scroll dashboard-content">
          <TopStores />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
