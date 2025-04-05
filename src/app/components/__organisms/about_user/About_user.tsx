import React, { useState } from "react";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Left_arrow_icon from "@/app/common/icons/Left_arrow_icon";
import Image from "next/image";
import Black_logo from "../../../assets/images/logo.png";
import Link from "next/link";
import Error_icon from "@/app/common/icons/Error_icon";
import { useStates } from "@/app/common/store";

function About_user() {
  const {
    name,
    day,
    month,
    year,
    gender,
    dayError,
    setName,
    setDay,
    setMonth,
    monthError,
    setYear,
    setGender,
    nameError,
    yearError,
    genderError,
    setNameError,
    setDayError,
    setMonthError,
    setYearError,
    setGenderError,
    setValidAbout,
  } = useStates();

  const handleSubmit = () => {
    let valid = true;

    if (name === "") {
      setNameError("Enter a name for your profile");
      valid = false;
    } else {
      setNameError("");
    }

    if (month === "" || month === "Month") {
      setMonthError("Select your birth month.");
      valid = false;
    } else {
      setMonthError("");
    }

    const yearNumber = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNumber) || yearNumber < 1900 || yearNumber > currentYear) {
      setYearError("Please enter a birth year from 1900 onwards.");
      valid = false;
    } else {
      setYearError("");
    }

    const dayNumber = parseInt(day);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
      setDayError("Please enter a valid day (1-31).");
      valid = false;
    } else {
      const thirtyDayMonths = ["April", "June", "September", "November"];
      const isLeap =
        yearNumber % 4 === 0 &&
        (yearNumber % 100 !== 0 || yearNumber % 400 === 0);
      const maxDay =
        month === "February"
          ? isLeap
            ? 29
            : 28
          : thirtyDayMonths.includes(month)
          ? 30
          : 31;
      if (dayNumber > maxDay) {
        setDayError(`${month} can't have more than ${maxDay} days.`);
        valid = false;
      } else {
        setDayError("");
      }
    }

    if (gender === "") {
      setGenderError("Select your gender.");
      valid = false;
    } else {
      setGenderError("");
    }

    if (valid) {
      setValidAbout();
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
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className={`bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] px-[10px] outline-none  border-solid border-[2px]  rounded-[5px] ${
            nameError ? " border-[#e91429]" : "border-[#5c5c5c]"
          }`}
        />
      </div>
      {nameError && (
        <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
          <Error_icon classname="w-[16px] h-[20px]" />
          <p className="text-[#f3727f] text-[14px] flex justify-start">
            {nameError}
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
              onChange={(e) => setDay(e.target.value)}
              type="text"
              maxLength={2}
              inputMode="numeric"
              placeholder="dd"
              className={`w-[60px] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                dayError ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            />
            <select
              onChange={(e) => setMonth(e.target.value)}
              className={`w-[100%] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                monthError ? " border-[#e91429]" : "border-[#5c5c5c]"
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
              onChange={(e) => setYear(e.target.value)}
              type="text"
              maxLength={4}
              inputMode="numeric"
              placeholder="yyyy"
              className={`w-[91px] p-2 bg-transparent text-white outline-none border-solid border-[2px]  rounded-[5px] ${
                yearError ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            />
          </div>
          {dayError && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="min-w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {dayError}
              </p>
            </div>
          )}
          {monthError && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {monthError}
              </p>
            </div>
          )}
          {yearError && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {yearError}
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
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          {genderError && (
            <div className="max-w-[324px] w-[100%] mt-[8px] flex items-center gap-[5px]">
              <Error_icon classname="w-[16px] h-[20px]" />
              <p className="text-[#f3727f] text-[14px] flex justify-start">
                {genderError}
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
