import HomeStories from "../../components/HomeStories";
import Feed from "./Feed";
import SideFeed from "./SideFeed";

const Home = () => {
  return (
    <>
      <div className="">
        <HomeStories />
      </div>
      <div className="flex h-[70%]">
        <div className="w-[30%] border-r-4 overflow-y-scroll dashboard-content">
          <SideFeed />
        </div>
        <div className="w-[70%] overflow-y-scroll border-r-4 dashboard-content poppins">
          <Feed />
        </div>
      </div>
    </>
  );
};
export default Home;
