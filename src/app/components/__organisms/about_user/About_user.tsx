import React, { useState } from "react";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Left_arrow_icon from "@/app/common/icons/Left_arrow_icon";
import Image from "next/image";
import Black_logo from "../../../assets/images/logo.png";
import Link from "next/link";
import Error_icon from "@/app/common/icons/Error_icon";
interface About_user {
  setValidAbout: (validAbout: boolean) => void;
}
function About_user({ setValidAbout }: About_user) {
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [nameerro, setnameerror] = useState("");
  const [montherror, setmontherror] = useState("");
  const [yearerror, setyearerror] = useState("");
  const [dayerror, setdayerror] = useState("");
  const [gendererror, setgendererror] = useState("");
  const [validname, setvalidname] = useState(false);
  const [validmonth, setvalidmonth] = useState(false);
  const [validday, setvalidday] = useState(false);
  const [validyear, setvalidyear] = useState(false);
  const [validgender, setvalidgender] = useState(false);
  const handleSubmit = () => {
    if (name === "") {
      setnameerror("Enter a name for your profile");
    } else {
      setnameerror("");
      setvalidname(true);
    }

    if (month === "") {
      setmontherror("Select your birth month.");
    } else {
      setmontherror("");
      setvalidmonth(true);
    }

    const newData = new Date();
    const currentyear = newData.getFullYear();
    const yearNumber = parseInt(year, 10);

    if (
      yearNumber < 1900 ||
      yearNumber > currentyear ||
      isNaN(yearNumber) ||
      year === ""
    ) {
      setyearerror("Please enter a birth year from 1900 onwards.");
    } else {
      setyearerror("");
      setvalidyear(true);
    }

    const dayNumber = parseInt(day, 10);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
      setdayerror(
        "Please enter the day of your birth date by entering a number between 1 and 31."
      );
    } else {
      if (
        (month === "February" &&
          ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) ||
            yearNumber % 400 === 0) &&
          dayNumber > 29) ||
        (month === "February" &&
          !(yearNumber % 4 === 0 && yearNumber % 100 !== 0) &&
          dayNumber > 28) ||
        (["April", "June", "September", "November"].includes(month) &&
          dayNumber > 30)
      ) {
        setdayerror(
          `${month} can't have more than ${
            month === "February"
              ? (yearNumber % 4 === 0 && yearNumber % 100 !== 0) ||
                yearNumber % 400 === 0
                ? "29"
                : "28"
              : "30"
          } days.`
        );
      } else {
        setdayerror("");
        setvalidday(true);
      }
    }
    if (gender === "") {
      setgendererror("Select your gender.");
    } else {
      setgendererror("");
      setvalidgender(true);
    }

    if (
      validname === true &&
      validmonth === true &&
      validyear === true &&
      validday === true &&
      validgender === true
    ) {
      setValidAbout(true);
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center">
      <Image
        className="w-[40px] h-[40px]"
        src={Black_logo}
        alt="spotify icon"
        width={600}
        height={600}
      />
      <div className="flex max-w-[436px] w-[100%] items-center gap-[20px] mt-[25px]">
        <Left_arrow_icon classname="w-[24px] h-[24px]" />
        <div className="flex flex-col ">
          <p className="text-[16px] text-[#b3b3b3] font-[700]">Step 2 of 3</p>
          <h2 className="text-[16px] text-[#fff] font-[700]">
            Tell us about yourself
          </h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px] mt-[30px]">
        <div className="flex flex-col">
          <label
            className="text-[14px] text-[#fff] font-[700] cursor-pointer"
            htmlFor="name"
          >
            Name
          </label>
          <p className="text-[14px] font-[700] text-[#b3b3b3]">
            This name will appear on your profile
          </p>
        </div>
        <input
          onChange={(e) => setname(e.target.value)}
          type="text"
          id="name"
          className={`bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] px-[10px] outline-none  border-solid border-[2px]  rounded-[5px] ${
            nameerro ? " border-[#e91429]" : "border-[#5c5c5c]"
          }`}
        />
      </div>
      {nameerro && (
        <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
          <Error_icon classname="w-[16px] h-[20px]" />
          <p className="text-[#f3727f] text-[14px] flex justify-start">
            {nameerro}
          </p>
        </div>
      )}
      <div className="flex flex-col max-w-[324px] w-[100%] mt-[20px] gap-[10px]">
        <div className="flex flex-col">
          <label
            className="text-[14px] text-[#fff] font-[700] cursor-pointer"
            htmlFor="name"
          >
            Date of birth
          </label>
          <div className="flex items-center">
            <p className="text-[14px] font-[700] text-[#b3b3b3]">
              Why do we need your date of birth?
            </p>
            <Link
              className="text-[14px] font-[700] text-[#b3b3b3] underline"
              href={"https://www.spotify.com/ge/legal/end-user-agreement/"}
            >
              Learn more
            </Link>
          </div>
          <div className="flex gap-[7px] mt-[10px]">
            <input
              onChange={(e) => setday(e.target.value)}
              type="text"
              maxLength={2}
              inputMode="numeric"
              placeholder="dd"
              className={`w-[60px] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                dayerror ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            />
            <select
              onChange={(e) => setmonth(e.target.value)}
              className={`w-[100%] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                montherror ? " border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            >
              <option>Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <input
              onChange={(e) => setyear(e.target.value)}
              type="text"
              maxLength={4}
              inputMode="numeric"
              placeholder="yyyy"
              className={`w-[91px] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                yearerror ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            />
          </div>
          {dayerror && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="min-w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {dayerror}
              </p>
            </div>
          )}
          {montherror && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {montherror}
              </p>
            </div>
          )}
          {yearerror && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {yearerror}
              </p>
            </div>
          )}
          <div className="flex flex-col mt-[20px]">
            <h2 className="text-[14px] text-[#fff] font-[700] ">Gender</h2>
            <p className="text-[14px] font-[700] text-[#b3b3b3]">
              We use your gender to help personalize our content recommendations
              and ads for you.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                "Man",
                "Woman",
                "Non-binary",
                "Something else",
                "Prefer not to say",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-[15px] text-[14px] text-[#fff] font-[700] "
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    className="accent-green-500"
                    onChange={(e) => setgender(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          {gendererror && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {gendererror}
              </p>
            </div>
          )}
        </div>
      </div>
      <Loging_btn_green
        handle={handleSubmit}
        classname="max-w-[324px] w-[100%] bg-[#1ed760] text-[16px] text-[#000000] flex items-center justify-center py-[8px] font-[700] rounded-[20px] mt-[50px]"
        text="Next"
      />
    </div>
  );
}

export default About_user;
