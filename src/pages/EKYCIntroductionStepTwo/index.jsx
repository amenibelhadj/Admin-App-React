import React from "react";

import { Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const EKYCIntroductionStepTwoPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-center justify-center sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[405px] py-20 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-auto"
                    size="txtInterBold24Bluegray900"
                  >
                    Introduction
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 hover:border hover:border-indigo-50 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_mail_bluegray_800_28x28.svg"
                              alt="mail"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Bước 1:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Scan ID Card
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_checkmark_deep_orange_300_24x24.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border hover:border-indigo-50 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_user_deep_orange_300.svg"
                              alt="user"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Bước 1:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Scan Face
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowright_bluegray_900_24x24.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <div className="md:h-7 h-[30px] relative w-[9%]">
                              <Img
                                className="absolute h-7 left-[0] top-[0]"
                                src="images/img_menu_bluegray_400.svg"
                                alt="menu"
                              />
                              <div className="absolute bottom-[0] flex flex-col h-4 items-center justify-start right-[0] w-4">
                                <div className="bg-white-A700 flex flex-col h-[13px] items-center justify-start outline outline-[0.5px] outline-bluegray-400 p-0.5 rounded-md w-[13px]">
                                  <Img
                                    className="h-[9px] w-[9px]"
                                    src="images/img_checkmark_bluegray_400.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Bước 3:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Confirm Information
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_bluegray_400.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Bước 3:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Signature
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_bluegray_400.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                    </List>
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

export default EKYCIntroductionStepTwoPage;
