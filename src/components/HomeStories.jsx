import src from "../assets/profile-pic/test.jpg";
import { trendingStories } from "../resources/Resources";
const HomeStories = () => {
  return (
    <div className="w-full h-full py-4 poppins">
      <h1 className="pl-5 font-bold">Trending Items</h1>
      <div className="w-full flex justify-between items-center py-2 px-2">
        {trendingStories.map((el) => {
          return (
            <>
              <div
                key={el.id}
                className={`cursor-pointer flex flex-col items-center`}
              >
                <div className="flex items-center">
                  <img
                    src={el.source}
                    alt=""
                    className="w-20 h-20 rounded-full border-green-400 border-4"
                  />
                  <i class="ri-arrow-down-s-fill"></i>
                </div>
                <p className="text-sm">{el.name}</p>
              </div>
              {el.id != 6 && <div className="w-[3px] h-8 bg-gray-200"></div>}
            </>
          );
        })}
        {/* <div className="w-[14%] cursor-pointer">
            <div>
                <img src={src} alt="" className="w-24 h-24 rounded-full border-green-400 border-4" />
                <i className="icon"></i>
            </div>
            <p>Anika Albrite</p>
        </div> */}
      </div>
    </div>
  );
};
export default HomeStories;
