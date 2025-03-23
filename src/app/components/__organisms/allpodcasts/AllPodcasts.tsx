"Use client";
import React from "react";
import Podcasts from "../../../../../podcasts.json";

function AllPodcasts() {
  const ArtsAndEntertainment = Podcasts.find(
    (category) => category.category === "Arts & Entertainment"
  );
  const BusinessAndTechnology = Podcasts.find(
    (category) => category.category === "Business & Technology"
  );
  const Educational = Podcasts.find(
    (category) => category.category === "Educational"
  );
  const Games = Podcasts.find((category) => category.category === "Games");
  const LifestyleAndHealth = Podcasts.find(
    (category) => category.category === "Lifestyle & Health"
  );
  const NewsAndPolitics = Podcasts.find(
    (category) => category.category === "News & Politics"
  );
  const SportsAndRecreation = Podcasts.find(
    (category) => category.category === "Sports & Recreation"
  );
  const TrueCrime = Podcasts.find(
    (category) => category.category === "True Crime"
  );

  return (
    <div className="max-w-[1700px] w-[100%] px-[20px] h-[4350px]">
      <h1 className="text-[72px] font-[800] text-[#fff] mt-[100px]">
        All podcast categories
      </h1>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">
          Arts & Entertainment
        </p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {ArtsAndEntertainment?.topics.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px] p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">
          Business & Technology
        </p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {BusinessAndTechnology?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">Educational</p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {Educational?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">Games</p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {Games?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">Lifestyle & Health</p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {LifestyleAndHealth?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">News & Politics</p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {NewsAndPolitics?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">
          Sports & Recreation
        </p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {SportsAndRecreation?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="w-[100%] mt-[70px]">
        <p className="text-[24px] text-[#fff] font-[700]">True crime</p>
        <div className="w-[100%] grid grid-cols-3 gap-[20px] mt-[20px]">
          {TrueCrime?.topics?.map((topic, key) => (
            <div
              key={key}
              style={{ backgroundColor: `${topic.color}` }}
              className="w-[100%] h-[160px] rounded-[10px]  p-[15px] cursor-pointer"
            >
              <p className="text-[18px] font-[600] text-[#fff]">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPodcasts;
