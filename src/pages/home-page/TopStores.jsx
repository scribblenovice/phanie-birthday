import { Link } from "react-router-dom";
import { storesInfo } from "../../resources/Resources";

const TopStores = () => {
  return (
    <div className="px-2 pb-20 poppins">
      <h2 className="font-bold mb-5">Top Store Online</h2>
      {storesInfo.map((el) => {
        return (
          <div key={el.id} className="mb-8 bg-white rounded-2xl">
            <div className="">
              <img
              loading="lazy"
                src={el.imgSrc}
                alt=""
                className="rounded-t-2xl w-full h-40"
              />
            </div>
            <div className="flex flex-col justify-evenly self px-2 py-5">
              <p className="text-xs text-gray-500">{el.description}</p>
              <Link to={el.to} className="self-end bg-orange-400 p-1 rounded-md text-white">Visit store</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TopStores;
