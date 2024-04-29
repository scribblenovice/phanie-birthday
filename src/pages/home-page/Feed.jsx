import { useState } from "react";
import ActionBtn from "../../components/ActionBtn";
import { feed } from "../../resources/Resources";
const Feed = () => {
  return (
    <div className="pb-16">
      {feed.map((el) => {
        const {
          id,
          profilePic,
          profileName,
          numOfLikes,
          numOfrComments,
          postDescription,
          postPicture,
          timeOfPosting,
          userHandle,
        } = el;
        const [active, setActive] = useState(false);
        const [likes, setLikes] = useState(numOfLikes);

        return (
          <div className="w-full px-2 mb-10" key={id}>
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <img
                  loading="lazy"
                  src={profilePic}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-bold text-base">{profileName}</p>
                  <p className="text-gray-400 text-sm">
                    {userHandle} . {timeOfPosting} hours ago
                  </p>
                </div>
              </div>
              <ActionBtn />
            </div>
            {/* middle and bottom */}
            <div className="py-4">
              <p className="pb-4 text-sm">{postDescription}</p>
              <img
                loading="lazy"
                src={postPicture}
                alt=""
                className="h-[350px] w-full rounded-lg"
              />
            </div>
            {/* likes, comment and share */}
            <div className="w-full flex items-center justify-between">
              {/* likes, comment*/}
              <div className="flex items-center">
                <div className=" w-fit flex items-center">
                  <i
                    onClick={() => {
                      setActive((prev) => {
                        return !prev;
                      });
                      if (active) {
                        setLikes(likes - 1);
                      }
                      if (!active) {
                        setLikes(likes + 1);
                      }
                    }}
                    className={`ri-heart-fill like-icon text-3xl cursor-pointer ${
                      active ? "text-red-500" : "text-gray-400"
                    }`}
                  ></i>
                  <span
                    className={`w-2 ml-2 ${
                      active ? "text-red-500" : "text-gray-500"
                    }`}
                  >
                    {likes}
                  </span>
                </div>
                <div className="text-gray-500 ml-10 flex items-center">
                  <i className="ri-discuss-line text-3xl cursor-pointer"></i>
                  <span className="w-2 ml-2">{el.numOfrComments}</span>
                </div>
              </div>

              {/* share btn */}
              <button>
                <i className="ri-send-plane-fill text-gray-500 text-3xl px-4"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Feed;
