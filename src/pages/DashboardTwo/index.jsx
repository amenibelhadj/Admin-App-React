import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1542px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:pl-5 pl-6 w-full">
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-6 items-end justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[849px] w-full">
                  <Text
                    className="text-bluegray-900 text-center text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row font-inter gap-3 items-center justify-start w-[207px]">
                    <Button className="bg-white-A700 flex h-12 items-center justify-center p-3.5 rounded w-12">
                      <Img
                        className="h-5"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    </Button>
                    <Button
                      className="bg-deep_orange-300 cursor-pointer flex items-center justify-center px-4 py-3.5 rounded w-full"
                      rightIcon={
                        <Img
                          className="h-5 ml-[35px]"
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-medium text-center text-sm text-white-A700">
                        Add task
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-full">
                            <Button className="bg-gray-102 flex h-12 items-center justify-center p-3.5 rounded w-12">
                              <Img
                                className="h-5"
                                src="images/img_file_green_700.svg"
                                alt="file"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-center justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-center text-lg w-full"
                                size="txtInterBold18Bluegray800"
                              >
                                50+
                              </Text>
                              <Text
                                className="text-bluegray-800 text-center text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Available Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-full">
                            <Button className="bg-yellow-50 flex h-12 items-center justify-center p-3.5 rounded w-12">
                              <Img
                                className="h-5"
                                src="images/img_mail_amber_300.svg"
                                alt="mail"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-center justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-center text-lg w-full"
                                size="txtInterBold18Bluegray800"
                              >
                                20
                              </Text>
                              <Text
                                className="text-bluegray-800 text-center text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Obsolete Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-full">
                            <Button className="bg-gray-103 flex h-12 items-center justify-center p-3.5 rounded w-12">
                              <Img
                                className="h-5"
                                src="images/img_folder_red_600.svg"
                                alt="folder"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-center justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-center text-lg"
                                size="txtInterBold18Bluegray800"
                              >
                                23
                              </Text>
                              <Text
                                className="text-bluegray-800 text-center text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                In Progress
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-full">
                            <Button className="bg-gray-52 flex h-12 items-center justify-center p-3.5 rounded w-12">
                              <Img
                                className="h-5"
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-center justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-center text-lg w-full"
                                size="txtInterBold18Bluegray800"
                              >
                                35
                              </Text>
                              <Text
                                className="text-bluegray-800 text-center text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Done Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-96 md:h-auto items-center justify-center sm:px-5 px-8 py-6 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-7 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Statistics
                          </Text>
                          <Button
                            className="bg-white-A700 border border-bluegray-200 border-solid cursor-pointer flex items-center justify-center min-w-[172px] px-[15px] py-2.5 rounded shadow-bs"
                            leftIcon={
                              <Img
                                className="h-5 mr-2.5"
                                src="images/img_calendar_bluegray_900.svg"
                                alt="calendar"
                              />
                            }
                          >
                            <div className="font-semibold text-bluegray-800 text-center text-sm">
                              13 Aug - 20 Aug
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col gap-8 items-center justify-start w-full">
                          <div className="flex flex-row gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-6 items-end justify-start w-[23px]">
                              <Text
                                className="text-bluegray-400 text-right text-xs w-full"
                                size="txtInterRegular12"
                              >
                                800
                              </Text>
                              <Text
                                className="text-bluegray-400 text-right text-xs w-full"
                                size="txtInterRegular12"
                              >
                                600
                              </Text>
                              <Text
                                className="text-bluegray-400 text-right text-xs w-full"
                                size="txtInterRegular12"
                              >
                                400
                              </Text>
                              <Text
                                className="text-bluegray-400 text-right text-xs w-full"
                                size="txtInterRegular12"
                              >
                                200
                              </Text>
                              <Text
                                className="text-bluegray-400 text-right text-xs w-full"
                                size="txtInterRegular12"
                              >
                                0
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                              <Img
                                className="h-44 w-full"
                                src="images/img_frame_gray_50.svg"
                                alt="frame"
                              />
                              <div className="flex flex-row gap-4 items-start justify-start px-0.5 w-full">
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Mon
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Tue
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Wed
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Thu
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs"
                                  size="txtInterRegular12"
                                >
                                  Fri
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Sat
                                </Text>
                                <Text
                                  className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Sun
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-6 items-center justify-center w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <div className="bg-amber-300 h-1.5 rounded-[50%] w-1.5"></div>
                              <Text
                                className="text-bluegray-400 text-xs w-auto"
                                size="txtInterMedium12"
                              >
                                Income
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <div className="bg-indigo-400 h-1.5 rounded-[50%] w-1.5"></div>
                              <Text
                                className="text-bluegray-400 text-xs w-auto"
                                size="txtInterMedium12"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Projects
                          </Text>
                          <Img
                            className="h-8 w-8"
                            src="images/img_user_bluegray_400.svg"
                            alt="user_One"
                          />
                        </div>
                        <div className="h-[190px] relative w-[190px]">
                          <div className="h-[190px] m-auto w-[190px]">
                            <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                                value={17}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(-23deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                value={24}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(51deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                          </div>
                          <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-end my-auto right-[31%] w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-auto"
                              size="txtInterBold24Bluegray800"
                            >
                              230+
                            </Text>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterRegular14Bluegray800"
                            >
                              Projects
                            </Text>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-2 grid grid-cols-3 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                            <div className="bg-green-700 h-1.5 rounded-[50%] w-1.5"></div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-900 text-center w-full"
                                size="txtInterSemiBold16Bluegray900"
                              >
                                100
                              </Text>
                              <Text
                                className="text-bluegray-400 text-center text-xs w-full"
                                size="txtInterMedium12"
                              >
                                High
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                            <div className="bg-indigo-400 h-1.5 rounded-[50%] w-1.5"></div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-900 text-center"
                                size="txtInterSemiBold16Bluegray900"
                              >
                                30
                              </Text>
                              <Text
                                className="text-bluegray-400 text-center text-xs w-full"
                                size="txtInterMedium12"
                              >
                                Low
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                            <div className="bg-amber-300 h-1.5 rounded-[50%] w-1.5"></div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-900 text-center w-full"
                                size="txtInterSemiBold16Bluegray900"
                              >
                                100
                              </Text>
                              <Text
                                className="text-bluegray-400 text-center text-xs w-full"
                                size="txtInterMedium12"
                              >
                                Medium
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-[388px] md:h-auto items-center justify-center sm:px-5 px-[31px] py-8 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-row gap-[54px] items-center justify-start w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Active tasks
                          </Text>
                          <div className="flex flex-1 flex-row gap-[7px] items-start justify-start w-full">
                            <Button className="bg-bluegray-900 cursor-pointer flex-1 font-semibold py-2.5 rounded text-center text-sm text-white-A700 w-full">
                              Day
                            </Button>
                            <Button className="border border-indigo-50 border-solid cursor-pointer flex-1 font-semibold py-2.5 rounded text-bluegray-800 text-center text-sm w-full">
                              Week
                            </Button>
                            <Button className="border border-indigo-50 border-solid cursor-pointer flex-1 font-semibold py-2.5 rounded text-bluegray-800 text-center text-sm w-full">
                              Month
                            </Button>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-5 items-start w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_computer.svg"
                              alt="computer"
                            />
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-xs w-full"
                                size="txtInterMedium12"
                              >
                                ACKERMAN_LHN
                              </Text>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <Line className="bg-red-600 h-4 w-1" />
                                <Text
                                  className="flex-1 leading-[24.00px] max-w-[301px] md:max-w-full text-base text-bluegray-900"
                                  size="txtInterMedium16Bluegray900"
                                >
                                  <span className="text-bluegray-900 font-inter text-left font-medium">
                                    Changelog Revamp{" "}
                                  </span>
                                  <span className="text-red-600 font-inter text-left font-medium">
                                    #ver 1.0
                                  </span>
                                  <span className="text-bluegray-900 font-inter text-left font-medium">
                                    {" "}
                                    Homescreen{" "}
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_checkmark_deep_orange_300.svg"
                              alt="checkmark"
                            />
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-xs w-full"
                                size="txtInterMedium12"
                              >
                                JOHNSON
                              </Text>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <Line className="bg-deep_orange-300 h-4 w-1" />
                                <Text
                                  className="flex-1 text-base text-bluegray-900 w-auto"
                                  size="txtInterMedium16Bluegray900"
                                >
                                  Create user flow for Data Projects
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_computer.svg"
                              alt="computer"
                            />
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-xs w-full"
                                size="txtInterMedium12"
                              >
                                UTILLIA
                              </Text>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <Line className="bg-indigo-400 h-4 w-1" />
                                <Text
                                  className="flex-1 leading-[24.00px] max-w-[301px] md:max-w-full text-base text-bluegray-900"
                                  size="txtInterMedium16Bluegray900"
                                >
                                  Gather to discuss about new project deriving
                                  from Avocado
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[29px] items-start justify-start sm:px-5 px-[31px] py-8 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Posting Tasks
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user_Two"
                        />
                      </div>
                      <Text
                        className="text-bluegray-900 text-sm w-full"
                        size="txtInterRegular14Bluegray900"
                      >
                        <a
                          href="javascript:"
                          className="text-bluegray-900 font-inter text-left font-normal underline"
                        >
                          Crucial tasks
                        </a>
                        <span className="text-bluegray-900 font-inter text-left font-normal">
                          /{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-bluegray-900 font-inter text-left font-normal underline"
                        >
                          Urgent tasks
                        </a>
                        <span className="text-bluegray-900 font-inter text-left font-normal">
                          /{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-bluegray-900 font-inter text-left font-normal underline"
                        >
                          Normal tasks
                        </a>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start max-w-[796px] w-full">
                        <List
                          className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-deep_orange-300 flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtInterSemiBold14"
                            >
                              Time
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Mon 10
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Tue 11
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Wed 12
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Thu 13
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Fri 14
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center sm:ml-[0] outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterMedium14Bluegray400"
                            >
                              Sat 15
                            </Text>
                          </div>
                        </List>
                        <div className="md:h-[3148px] h-[336px] sm:h-[341px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                      <Text
                                        className="text-bluegray-400 text-xs w-auto"
                                        size="txtInterRegular12"
                                      >
                                        09 am
                                      </Text>
                                    </div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                      <Text
                                        className="text-bluegray-400 text-xs w-auto"
                                        size="txtInterRegular12"
                                      >
                                        10 am
                                      </Text>
                                    </div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                      <Text
                                        className="text-bluegray-400 text-xs w-auto"
                                        size="txtInterRegular12"
                                      >
                                        11 am
                                      </Text>
                                    </div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                      <Text
                                        className="text-bluegray-400 text-xs w-auto"
                                        size="txtInterRegular12"
                                      >
                                        12 am
                                      </Text>
                                    </div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                      <Text
                                        className="text-bluegray-400 text-xs w-auto"
                                        size="txtInterRegular12"
                                      >
                                        01 am
                                      </Text>
                                    </div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                    <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  </div>
                                </List>
                              </div>
                              <List
                                className="flex flex-col gap-px items-center w-full"
                                orientation="vertical"
                              >
                                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                  <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                    <Text
                                      className="text-bluegray-400 text-xs w-auto"
                                      size="txtInterRegular12"
                                    >
                                      02 am
                                    </Text>
                                  </div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                </div>
                                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                                  <div className="flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-indigo-50 sm:px-5 px-[33px] py-[13px] w-full">
                                    <Text
                                      className="text-bluegray-400 text-xs w-auto"
                                      size="txtInterRegular12"
                                    >
                                      03 am
                                    </Text>
                                  </div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                  <div className="flex-1 h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]"></div>
                                </div>
                              </List>
                            </div>
                          </div>
                          <List
                            className="absolute sm:flex-col flex-row md:gap-10 gap-[113px] grid grid-cols-2 inset-y-[0] left-[17%] my-auto w-[45%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-row items-start justify-start w-36">
                              <Line className="bg-green-700 h-[171px] w-1" />
                              <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-4 rounded-br rounded-tr shadow-bs w-auto">
                                <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-auto">
                                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                    <Button className="bg-deep_orange-300 cursor-pointer font-poppins font-semibold min-w-[94px] py-1 rounded text-[10px] text-center text-white-A700">
                                      #Data projects
                                    </Button>
                                    <Text
                                      className="text-bluegray-800 text-sm w-auto"
                                      size="txtInterSemiBold14Bluegray800"
                                    >
                                      Revamp UI, UX
                                    </Text>
                                  </div>
                                  <div className="flex relative w-10">
                                    <div className="flex flex-col h-6 items-center justify-start my-auto rounded-[50%] w-6">
                                      <Img
                                        className="h-6 md:h-auto rounded-[50%] w-6"
                                        src="images/img_robototoyfacefinal2_24x24.png"
                                        alt="robototoyfacefi"
                                      />
                                    </div>
                                    <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto rounded-[50%] w-6 z-[1]">
                                      <Img
                                        className="h-6 md:h-auto rounded-[50%] w-6"
                                        src="images/img_fidenza978toyface.png"
                                        alt="fidenza978toyfa"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start w-[100px]">
                              <Line className="bg-indigo-400 h-[171px] w-1" />
                              <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-4 rounded-br rounded-tr shadow-bs w-auto">
                                <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-auto">
                                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                    <Button className="bg-indigo-400 cursor-pointer font-poppins font-semibold min-w-[49px] py-1 rounded text-[10px] text-center text-white-A700">
                                      #2011
                                    </Button>
                                    <Text
                                      className="text-bluegray-800 text-sm w-auto"
                                      size="txtInterSemiBold14Bluegray800"
                                    >
                                      Meeting
                                    </Text>
                                  </div>
                                  <div className="flex relative w-10">
                                    <div className="flex flex-col h-6 items-center justify-start my-auto rounded-[50%] w-6">
                                      <Img
                                        className="h-6 md:h-auto rounded-[50%] w-6"
                                        src="images/img_robototoyfacefinal2_24x24.png"
                                        alt="robototoyfacefi"
                                      />
                                    </div>
                                    <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto rounded-[50%] w-6 z-[1]">
                                      <Img
                                        className="h-6 md:h-auto rounded-[50%] w-6"
                                        src="images/img_fidenza978toyface.png"
                                        alt="fidenza978toyfa"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[30px] py-4 rounded shadow-bs w-[295px]">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Calendar
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_user_bluegray_400.svg"
                        alt="user_Three"
                      />
                    </div>
                    <div className="flex flex-col font-plusjakartasans items-start justify-start outline outline-[0.5px] outline-gray-300 rounded w-full">
                      <div className="flex flex-col items-start justify-start p-3 rounded w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[60.62px] items-start justify-start w-auto">
                            <Img
                              className="h-[17px] w-[17px]"
                              src="images/img_arrowleft_gray_501.svg"
                              alt="arrowleft"
                            />
                            <Text
                              className="text-[10.48px] text-bluegray-800 text-center w-auto"
                              size="txtPlusJakartaSansMedium1048"
                            >
                              June 2021
                            </Text>
                            <Img
                              className="h-[17px] w-[17px]"
                              src="images/img_arrowright_gray_501.svg"
                              alt="arrowright"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Mon
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Tue
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Wed
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Thu
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Fri
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Sat
                            </Text>
                            <Text
                              className="text-[8.98px] text-bluegray-400 text-center w-auto"
                              size="txtPlusJakartaSansMedium898"
                            >
                              Sun
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start w-full">
                            <div className="flex flex-row items-start justify-start w-auto">
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  1
                                </Text>
                              </div>
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  2
                                </Text>
                              </div>
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  3
                                </Text>
                              </div>
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  4
                                </Text>
                              </div>
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  5
                                </Text>
                              </div>
                              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                <Text
                                  className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                  size="txtPlusJakartaSansSemiBold1048"
                                >
                                  6
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="grid grid-cols-7 justify-center min-h-[auto] w-full">
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    7
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    8
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    9
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    10
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    11
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    12
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    13
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    14
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    15
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    16
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    17
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    18
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    19
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-full">
                                  <Text
                                    className="text-[10.48px] text-bluegray-800 text-center"
                                    size="txtPlusJakartaSansSemiBold1048"
                                  >
                                    20
                                  </Text>
                                </div>
                              </div>
                              <List
                                className="flex flex-col gap-px items-center w-full"
                                orientation="vertical"
                              >
                                <div className="flex flex-row items-start justify-start my-0 w-auto">
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      21
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      22
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      23
                                    </Text>
                                  </div>
                                  <Button className="bg-deep_orange-300 cursor-pointer font-semibold h-[30px] py-2 rounded-sm text-[10.48px] text-bluegray-900 text-center w-[30px]">
                                    24
                                  </Button>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      25
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      26
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      27
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start my-0 w-auto">
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      28
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      29
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      30
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-800 text-center w-auto"
                                      size="txtPlusJakartaSansSemiBold1048"
                                    >
                                      31
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-200 text-center w-auto"
                                      size="txtPlusJakartaSansSemiBold1048Bluegray200"
                                    >
                                      1
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-200 text-center w-auto"
                                      size="txtPlusJakartaSansSemiBold1048Bluegray200"
                                    >
                                      2
                                    </Text>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center px-[11.98px] py-[6.74px] rounded-sm w-[30px]">
                                    <Text
                                      className="text-[10.48px] text-bluegray-200 text-center w-auto"
                                      size="txtPlusJakartaSansSemiBold1048Bluegray200"
                                    >
                                      3
                                    </Text>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-bluegray-900 text-center text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Recent activities
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_user_bluegray_400.svg"
                        alt="user_Four"
                      />
                    </div>
                    <List
                      className="flex flex-col font-inter gap-[33px] items-start w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start my-0 w-full">
                        <Text
                          className="text-bluegray-400 text-sm w-full"
                          size="txtInterMedium14Bluegray400"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex flex-col gap-5 items-start w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-red-600 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-indigo-400 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-green-700 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-indigo-400 h-[47px] w-1" />
                              <Text
                                className="flex-1 text-base text-bluegray-900 w-auto"
                                size="txtInterMedium16Bluegray900"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start my-0 w-full">
                        <Text
                          className="text-bluegray-400 text-sm w-full"
                          size="txtInterMedium14Bluegray400"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex flex-col gap-5 items-start w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-red-600 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-indigo-400 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-green-700 h-[47px] w-1" />
                              <Text
                                className="flex-1 leading-[24.00px] max-w-[223px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                            <Text
                              className="text-bluegray-400 text-xs w-full"
                              size="txtInterMedium12"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Line className="bg-indigo-400 h-[47px] w-1" />
                              <Text
                                className="flex-1 text-base text-bluegray-900 w-auto"
                                size="txtInterMedium16Bluegray900"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
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

export default DashboardTwoPage;
