import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const DashboardRechargemoneyPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-end justify-start w-auto">
          <Img
            className="h-10 w-10"
            src="images/img_xcircle.svg"
            alt="xcircle"
          />
          <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-7 py-8 rounded shadow-bs1 w-auto md:w-full">
            <div className="flex flex-col gap-8 h-[696px] md:h-auto items-start justify-start max-w-[700px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-full"
                size="txtInterBold24Bluegray800"
              >
                Pick a wallet
              </Text>
              <Input
                name="textinput"
                placeholder="0.0"
                className="font-medium p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-5 mr-4"
                    src="images/img_music.svg"
                    alt="music"
                  />
                }
              ></Input>
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start md:pr-10 sm:pr-5 pr-[181px] w-full">
                <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[15px] rounded text-bluegray-800 text-center text-sm w-full">
                  200.000đ
                </Button>
                <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[15px] rounded text-bluegray-800 text-center text-sm w-full">
                  500.000đ
                </Button>
                <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[15px] rounded text-bluegray-800 text-center text-sm w-full">
                  1.000.000đ
                </Button>
                <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[15px] rounded text-bluegray-800 text-center text-sm w-full">
                  2.000.000đ
                </Button>
              </div>
              <Line className="bg-indigo-50 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-base text-bluegray-800 w-full"
                    size="txtInterMedium16"
                  >
                    Available Wallet
                  </Text>
                  <Input
                    name="walletoptions"
                    placeholder="Torus"
                    className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                    wrapClassName="border border-indigo-50 border-solid flex pl-4 pr-[35px] py-4 rounded w-full"
                    prefix={
                      <Img
                        className="h-8 mr-2.5 my-auto"
                        src="images/img_bookmark_indigo_400.svg"
                        alt="bookmark"
                      />
                    }
                  ></Input>
                  <div className="bg-gray-50 border border-indigo-50 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                          <Img
                            className="h-8 md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-8"
                            src="images/img_metamaskicon0.png"
                            alt="metamaskiconZero"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-bluegray-800 w-auto"
                          size="txtInterSemiBold16"
                        >
                          Metamask
                        </Text>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright_bluegray_900.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="border border-indigo-50 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <div className="flex flex-col h-8 items-center justify-end p-0.5 w-8">
                        <Img
                          className="h-[26px] md:h-auto object-cover w-[26px]"
                          src="images/img_portisicon.png"
                          alt="portisicon"
                        />
                      </div>
                      <Text
                        className="flex-1 text-base text-bluegray-800 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Portis
                      </Text>
                    </div>
                  </div>
                  <div className="border border-indigo-50 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_logofortmatic.png"
                          alt="logofortmatic"
                        />
                      </div>
                      <Text
                        className="flex-1 text-base text-bluegray-800 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Fortmatic
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-indigo-50 h-[344px] md:h-px md:w-full w-px" />
                <div className="flex flex-1 flex-col gap-[19px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-bluegray-800 w-full"
                        size="txtInterMedium16"
                      >
                        QR Code
                      </Text>
                      <Text
                        className="text-bluegray-400 text-sm w-full"
                        size="txtInterRegular14Bluegray400"
                      >
                        Scan this QR code{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Text
                        className="text-base text-indigo-400 w-auto"
                        size="txtInterMedium16Indigo400"
                      >
                        Refresh
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[279px] w-full"
                    src="images/img_barcodeqr1.svg"
                    alt="barcodeqrOne"
                  />
                </div>
              </div>
              <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[27px] text-center text-sm text-white-A700 w-full">
                Pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRechargemoneyPage;
