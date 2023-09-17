import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const EKYCSuccessfulPage = () => {
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
              <div className="bg-white-A700 flex flex-col h-[796px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[236px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-center w-full">
                  <Img
                    className="h-[342px] w-[342px]"
                    src="images/img_thumbsup1.svg"
                    alt="thumbsupOne"
                  />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24Bluegray900"
                    >
                      Yeahhh! Your account has been verified
                    </Text>
                    <Text
                      className="text-bluegray-900 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray900"
                    >
                      Thank for your patient. Your account has been protected
                    </Text>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                    Finish process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCSuccessfulPage;
