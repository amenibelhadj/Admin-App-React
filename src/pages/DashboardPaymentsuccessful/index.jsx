import React from "react";

import { Button, Img, Text } from "components";

const DashboardPaymentsuccessfulPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-end justify-start w-auto">
          <Img
            className="h-10 w-full"
            src="images/img_xcircle.svg"
            alt="frame18158"
          />
          <div className="bg-white-A700 flex flex-col h-[544px] md:h-auto items-start justify-start sm:px-5 px-[33px] py-8 rounded shadow-bs1 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                <Img
                  className="h-[152px] w-[186px]"
                  src="images/img_layer2.svg"
                  alt="layerTwo"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col gap-4 items-center justify-start w-[243px]">
                      <Text
                        className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                        size="txtInterBold24Bluegray800"
                      >
                        Payment Successful
                      </Text>
                      <Text
                        className="leading-[22.00px] text-bluegray-800 text-center text-sm"
                        size="txtInterRegular14Bluegray800"
                      >
                        <span className="text-bluegray-800 font-inter font-normal">
                          Add
                        </span>
                        <span className="text-green-700 font-inter font-medium">
                          {" "}
                          200.000đ
                        </span>
                        <span className="text-bluegray-800 font-inter font-normal">
                          <>
                            {" "}
                            to your wallet already
                            <br />
                            Check your new balance!
                          </>
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-bluegray-400 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Send receipt to
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-full">
                    <Button className="border border-indigo-50 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                      <Img
                        className="h-5"
                        src="images/img_lightbulb.svg"
                        alt="lightbulb"
                      />
                    </Button>
                    <Button
                      className="common-pointer border border-indigo-50 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12"
                      onClick={handleNavigate}
                    >
                      <Img
                        className="h-5"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                    <Button className="border border-indigo-50 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                      <Img
                        className="h-5"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                Yes, I understand
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPaymentsuccessfulPage;
