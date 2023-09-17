import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const EKYCBeginPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[405px] py-[124px] rounded shadow-bs w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto">
                  <Img
                    className="h-56 w-56"
                    src="images/img_paywithcreditcard.svg"
                    alt="paywithcreditca"
                  />
                  <div className="flex flex-col gap-6 items-center justify-start w-auto">
                    <div className="flex flex-col gap-3 items-center justify-start w-auto">
                      <Text
                        className="text-bluegray-900 text-center text-lg w-full"
                        size="txtInterBold18"
                      >
                        eKYC Verification
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[264px] md:max-w-full text-bluegray-900 text-center text-sm"
                        size="txtInterRegular14Bluegray900"
                      >
                        Your information has been verified to ensure your
                        payment safely
                      </Text>
                    </div>
                    <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[15px] rounded-[24px] text-center text-sm text-white-A700 w-full">
                      Verify now
                    </Button>
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

export default EKYCBeginPage;
