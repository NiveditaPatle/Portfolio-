import React from "react";
import { FaSchool } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoRemoveOutline } from "react-icons/io5";

const Qualification = () => {
  return (
    <div id="qualification" className="">
      <div className="title flex items-center space-x-2">
        <IoRemoveOutline  className="title-icon "/>
        <span className="title-color">&lt;</span><h1 className="px-3">QUALIFICATION</h1> <span className="title-color">/&gt;</span>
        <IoRemoveOutline className="title-icon"/>
      </div>
      <div className="flex flex-col  md:flex-row justify-between p-6">
        {/* <!-- Experience Section --> */}
        <div className="w-full mb-5 md:w-6/12 p-4 border shadow-lg rounded-lg border-stone-800 bg-stone-900">
        <div className=" flex items-center text-[26px] mb-4">
            <IoRemoveOutline className=" text-[#8a2387] " />
            <h2>
              {" "}
              <span className="text-[#8a2387]">&lt;</span>{" "}
              <span className="text-[22px] "> EXPERIENCE </span>{" "}
              <span className="text-[#8a2387]">/&gt;</span>{" "}
            </h2>
            <IoRemoveOutline className="text-[#8a2387] " />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <HiBuildingOffice className="text-2xl mt-2 text-[#f27121]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">Frontend Developer</h3>
                  <span className="text-gray-400 text-sm">
                    May 2024 - Present
                  </span>
                </div>
                <p className="text-gray-400">Freelancer</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <HiBuildingOffice className="text-2xl mt-2 text-[#e94057]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">
                    Web Developer Executive
                  </h3>
                  <span className="text-gray-400 text-sm">
                    Feb 2023 - May 2024
                  </span>
                </div>
                <p className="text-gray-400">TMMS Solutions Private Limited</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <HiBuildingOffice className="text-2xl mt-2 text-[#f27121]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">Frontend Developer</h3>
                  <span className="text-gray-400 text-sm">
                    May 2021 - Dec 2022
                  </span>
                </div>
                <p className="text-gray-400">Get Ahead Express</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Education Section --> */}
        <div className="w-full md:w-2/5 p-4 border shadow-lg rounded-lg border-stone-800 bg-stone-900">
        <div className=" flex items-center text-[26px] mb-4">
            <IoRemoveOutline className=" text-[#8a2387] " />
            <h2>
              {" "}
              <span className="text-[#8a2387]">&lt;</span>{" "}
              <span className="text-[22px] "> EDUCATION </span>{" "}
              <span className="text-[#8a2387]">/&gt;</span>{" "}
            </h2>
            <IoRemoveOutline className="text-[#8a2387] " />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <FaSchool className="text-2xl mt-2 text-[#e94057]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">
                    Bachelor Degree in CE
                  </h3>
                  <span className="text-gray-400 text-sm">2018</span>
                </div>
                <p className="text-gray-400">LNCT College</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <FaSchool className="text-2xl mt-2 text-[#f27121]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">
                    Higher Secondary Certificate
                  </h3>
                  <span className="text-gray-400 text-sm">2014</span>
                </div>
                <p className="text-gray-400">
                  Kendriya Vidyalaya No. 2, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg">
              <FaSchool className="text-2xl mt-2 text-[#e94057]" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-300">
                    Secondary School Certificate
                  </h3>
                  <span className="text-gray-400 text-sm">2012</span>
                </div>
                <p className="text-gray-400">Kendriya Vidyalaya Bairagarh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
