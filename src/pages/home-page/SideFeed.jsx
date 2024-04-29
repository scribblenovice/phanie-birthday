import { sideFeed } from "../../resources/Resources";
const SideFeed = () => {
  return (
    <div className="max-h-full">
      <div className="h-fit pb-24">
        {sideFeed.map((el) => {
          return (
            <div className="w-full mb-6 px-1 relative cursor-pointer">
              <img src={el.feedImg} alt="" className="rounded-xl h-80" />
              <div className="absolute rounded-full top-5 left-5 border-white border-2">
                <img
                  src={el.profilePic}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideFeed;
