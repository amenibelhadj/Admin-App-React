import React from "react";

import { Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const EKYCScanFacePage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  eKYC
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                  <span className="text-bluegray-400 font-inter font-normal">
                    Setting/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    eKYC
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[283px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24Bluegray900"
                    >
                      Scan Face
                    </Text>
                    <Text
                      className="text-bluegray-400 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Follow introduction below
                    </Text>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <div className="h-[504px] mx-auto w-full">
                      <Img
                        className="h-[504px] m-auto object-cover rounded w-full"
                        src="images/img_rectangle_504x585.png"
                        alt="rectangle"
                      />
                      <Img
                        className="absolute h-[504px] inset-[0] justify-center m-auto"
                        src="images/img_exclude.svg"
                        alt="exclude"
                      />
                    </div>
                    <div className="bg-deep_orange-300 flex flex-col h-20 items-center justify-start mt-[-17px] mx-auto outline outline-[4px] outline-white-A700 p-[26px] sm:px-5 rounded-[50%] w-20 z-[1]">
                      <Img
                        className="h-7 w-7"
                        src="images/img_camera_white_a700.svg"
                        alt="camera"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCScanFacePage;
