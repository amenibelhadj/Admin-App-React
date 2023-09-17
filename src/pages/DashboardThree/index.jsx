import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardThreePage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[84px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-9 items-center justify-start mb-[965px] mt-9 mx-auto w-full">
            <Img className="h-7" src="images/img_bookmark.svg" alt="bookmark" />
            <div className="flex flex-col gap-[34px] items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_grid_deep_orange_300.svg"
                alt="grid"
              />
              <Img className="h-5 w-5" src="images/img_user.svg" alt="user" />
              <Img className="h-5 w-5" src="images/img_sort.svg" alt="sort" />
              <Img
                className="h-5 w-5"
                src="images/img_folder.svg"
                alt="folder"
              />
              <Img
                className="h-5 w-5"
                src="images/img_calendar.svg"
                alt="calendar"
              />
              <Img
                className="h-5 w-5"
                src="images/img_trash_bluegray_400.svg"
                alt="trash"
              />
              <Img className="h-5 w-5" src="images/img_mail.svg" alt="mail" />
              <div className="bg-white-A700 flex flex-col h-5 items-center justify-start w-5">
                <div className="bg-bluegray-400 h-[18px] rounded-[50%] w-[18px]"></div>
              </div>
            </div>
          </div>
        </Sidebar>
        <Line className="bg-indigo-50 h-[1463px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-end justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:pl-5 pl-6 w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-bluegray-900 text-center text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row font-inter gap-3 items-start justify-start w-auto">
                    <Button className="bg-white-A700 flex items-center justify-center p-[13px] rounded w-1/4">
                      <Img
                        className="h-5"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    </Button>
                    <SelectBox
                      className="bg-white-A700 font-medium px-4 py-3.5 rounded text-bluegray-800 text-center text-sm w-[70%] sm:w-full"
                      placeholderClassName="text-bluegray-800"
                      indicator={
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown_bluegray_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdown"
                      options={dropdownOptionsList}
                      isSearchable={false}
                      placeholder="Last week"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                  <List
                    className="flex md:flex-1 flex-col gap-5 items-start w-[201px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-col h-[199px] md:h-auto items-center justify-center my-0 sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Img
                          className="h-[43px] w-[75px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <div className="flex flex-col gap-1 items-center justify-start w-full">
                          <Text
                            className="text-bluegray-400 text-center text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            Total Tasks
                          </Text>
                          <Text
                            className="text-bluegray-800 text-center text-lg w-full"
                            size="txtInterBold18Bluegray800"
                          >
                            120
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[199px] md:h-auto items-center justify-center my-0 sm:px-5 px-6 py-8 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Img
                          className="h-[43px] w-[73px]"
                          src="images/img_signal_green_700.svg"
                          alt="signal"
                        />
                        <div className="flex flex-col gap-1 items-center justify-start w-full">
                          <Text
                            className="text-bluegray-400 text-center text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            New Tasks
                          </Text>
                          <Text
                            className="text-bluegray-800 text-center text-lg w-full"
                            size="txtInterBold18Bluegray800"
                          >
                            60
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-1 flex-col h-[418px] md:h-auto items-start justify-start sm:px-5 px-8 py-[31px] rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Statistics
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user_One"
                        />
                      </div>
                      <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                        <Img
                          className="h-[139px] w-full"
                          src="images/img_frame_amber_300.svg"
                          alt="frame"
                        />
                        <div className="flex flex-row gap-[29px] items-start justify-start px-0.5 w-full">
                          <Text
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
                            size="txtInterRegular12"
                          >
                            Mon
                          </Text>
                          <Text
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
                            size="txtInterRegular12"
                          >
                            Tue
                          </Text>
                          <Text
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
                            size="txtInterRegular12"
                          >
                            Wed
                          </Text>
                          <Text
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
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
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
                            size="txtInterRegular12"
                          >
                            Sat
                          </Text>
                          <Text
                            className="flex-1 leading-[16.00px] max-w-[17px] md:max-w-full text-bluegray-400 text-center text-xs"
                            size="txtInterRegular12"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-104 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded w-full">
                        <div className="flex flex-row gap-5 items-center justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-base text-bluegray-900 w-full"
                              size="txtInterSemiBold16Bluegray900"
                            >
                              Data project report
                            </Text>
                            <Text
                              className="text-bluegray-900 text-sm w-full"
                              size="txtInterRegular14Bluegray900"
                            >
                              • In process
                            </Text>
                          </div>
                          <div className="bg-indigo-52 flex flex-col items-start justify-start p-1 rounded-[50%] w-16">
                            <div className="bg-indigo-400 h-14 rounded-[50%] shadow-bs3 w-14"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[21px] py-[31px] rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Sales
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user_Two"
                        />
                      </div>
                      <div className="h-[190px] relative w-[190px]">
                        <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                            value={28}
                            strokeWidth={1}
                            styles={{
                              trail: { strokeWidth: 1, stroke: "" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(225deg)",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="absolute flex flex-col gap-2 h-max inset-[0] items-center justify-center m-auto pt-0.5">
                          <Text
                            className="text-bluegray-800 text-sm"
                            size="txtInterRegular14Bluegray800"
                          >
                            Total
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl"
                            size="txtInterBold24Bluegray800"
                          >
                            $2,000
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-5 items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[22px] items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-red-600 h-2 rounded-[50%] w-2"></div>
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              Current Week
                            </Text>
                          </div>
                          <div className="flex flex-row gap-5 items-start justify-start w-auto">
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterMedium14Bluegray800"
                            >
                              $1,200
                            </Text>
                            <Button
                              className="bg-green-700_19 cursor-pointer flex items-center justify-center min-w-[62px] px-1 py-0.5 rounded"
                              leftIcon={
                                <Img
                                  className="h-4 mr-1 my-px"
                                  src="images/img_arrowup.svg"
                                  alt="arrow_up"
                                />
                              }
                            >
                              <div className="font-semibold text-green-700 text-left text-sm">
                                0.2%
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-green-700 h-2 rounded-[50%] w-2"></div>
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              Last Week
                            </Text>
                          </div>
                          <div className="flex flex-row gap-5 items-center justify-start w-auto">
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterMedium14Bluegray800"
                            >
                              $800
                            </Text>
                            <Button
                              className="bg-green-700_19 cursor-pointer flex items-center justify-center min-w-[62px] px-1 py-0.5 rounded"
                              leftIcon={
                                <Img
                                  className="h-4 mr-1 my-px"
                                  src="images/img_arrowup.svg"
                                  alt="arrow_up"
                                />
                              }
                            >
                              <div className="font-semibold text-green-700 text-left text-sm">
                                0.2%
                              </div>
                            </Button>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col h-[465px] md:h-auto items-center justify-center sm:px-5 px-6 py-[26px] rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
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
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-full">
                              <div className="flex flex-col gap-6 items-start justify-start w-[18px]">
                                <Text
                                  className="text-bluegray-400 text-right text-xs"
                                  size="txtInterRegular12"
                                >
                                  Su
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs"
                                  size="txtInterRegular12"
                                >
                                  Sa
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Fr
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs"
                                  size="txtInterRegular12"
                                >
                                  Th
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  We
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs"
                                  size="txtInterRegular12"
                                >
                                  Tu
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-right text-xs w-auto"
                                  size="txtInterRegular12"
                                >
                                  Mo
                                </Text>
                              </div>
                              <div className="font-poppins h-64 relative w-[88%] sm:w-full">
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto p-0.5 w-[90%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[248px] mt-1 w-[236px]"
                                    src="images/img_frame_indigo_400_248x236.svg"
                                    alt="frame_One"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start pt-[15px] px-[15px] right-[0] shadow-bs2 top-[11%] w-[35%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group_white_a700_48x131.svg')",
                                  }}
                                >
                                  <div className="flex flex-row gap-[19px] items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-row gap-[7px] items-start justify-start w-[41%]">
                                      <Img
                                        className="h-1.5 mt-[5px] w-[5px]"
                                        src="images/img_oval.svg"
                                        alt="oval"
                                      />
                                      <Text
                                        className="leading-[16.00px] text-bluegray-900 text-xs w-[68%] sm:w-full"
                                        size="txtPoppinsSemiBold12"
                                      >
                                        150.0
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start w-2/5">
                                      <Img
                                        className="h-1.5 mt-[5px] w-[5px]"
                                        src="images/img_oval_amber_300.svg"
                                        alt="oval_One"
                                      />
                                      <Text
                                        className="leading-[16.00px] text-bluegray-900 text-xs w-[70%] sm:w-full"
                                        size="txtPoppinsSemiBold12"
                                      >
                                        120.0
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[30px] items-start justify-start w-[365px]">
                              <Text
                                className="flex-1 leading-[16.00px] max-w-[26px] md:max-w-full text-bluegray-400 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                -300
                              </Text>
                              <Text
                                className="flex-1 leading-[16.00px] max-w-[26px] md:max-w-full text-bluegray-400 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                -200
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-right text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                -100
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-right text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                0
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-right text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                100
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-right text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                200
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-right text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                300
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
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Total projects
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user_Three"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-900 w-full"
                            size="txtInterSemiBold16Bluegray900"
                          >
                            Mobile app (4/12)
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-start w-full">
                            <div className="bg-gray-50 flex sm:flex-1 flex-col items-start justify-start rounded w-[86%] sm:w-full">
                              <Img
                                className="h-2 rounded"
                                src="images/img_menu.svg"
                                alt="menu"
                              />
                            </div>
                            <Text
                              className="text-base text-bluegray-900 text-right w-auto"
                              size="txtInterRegular16Bluegray900"
                            >
                              34%
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-900 w-full"
                            size="txtInterSemiBold16Bluegray900"
                          >
                            Landing page (2/4)
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-start w-full">
                            <div className="h-2 overflow-hidden relative w-[86%]">
                              <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                              <div
                                className="h-full absolute bg-green_700  rounded-[4px]"
                                style={{ width: "62%" }}
                              ></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 text-right w-auto"
                              size="txtInterRegular16Bluegray900"
                            >
                              50%
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-900 w-full"
                            size="txtInterSemiBold16Bluegray900"
                          >
                            Branding (2/2)
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col items-center justify-start w-[86%] sm:w-full">
                              <div className="bg-amber-300 h-2 rotate-[90deg] rounded w-full"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 text-right w-auto"
                              size="txtInterRegular16Bluegray900"
                            >
                              100%
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-900 w-full"
                            size="txtInterSemiBold16Bluegray900"
                          >
                            Branding (2/2)
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-start w-full">
                            <div className="bg-gray-50 flex sm:flex-1 flex-col items-start justify-start rounded w-[86%] sm:w-full">
                              <Img
                                className="h-2 rounded"
                                src="images/img_menu_red_600.svg"
                                alt="menu_One"
                              />
                            </div>
                            <Text
                              className="text-base text-bluegray-900 text-right w-auto"
                              size="txtInterRegular16Bluegray900"
                            >
                              25%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-inter items-start justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-auto"
                        size="txtInterBold18"
                      >
                        Transactions history
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-center p-2.5 w-14">
                          <Text
                            className="text-base text-bluegray-400 w-auto"
                            size="txtInterRegular16"
                          >
                            No
                          </Text>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[94%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Customer
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Date
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Amount
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Order No.
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Payment type
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Action
                            </Text>
                          </div>
                        </List>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-14">
                            1
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-auto">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_robototoyfacefinal2_24x24.png"
                                  alt="robototoyfacefi"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-end">
                                <Text
                                  className="text-base text-bluegray-800"
                                  size="txtInterMedium16"
                                >
                                  Ackerman
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            12.02.2022
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            $20.0
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            Visa Card
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <Text
                              className="text-base text-bluegray-800 w-auto"
                              size="txtInterMedium16"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-auto">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-end">
                                <Text
                                  className="text-base text-bluegray-800"
                                  size="txtInterMedium16"
                                >
                                  Utillia
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 w-auto"
                              size="txtInterMedium16"
                            >
                              12.02.2022
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 w-auto"
                              size="txtInterMedium16"
                            >
                              $32.0
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 w-auto"
                              size="txtInterMedium16"
                            >
                              #21033
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 w-auto"
                              size="txtInterMedium16"
                            >
                              Visa Card
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-14">
                            3
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-auto">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1_24x24.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                <Text
                                  className="text-base text-bluegray-800"
                                  size="txtInterMedium16"
                                >
                                  Benjamin
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            12.02.2022
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            $16.0
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            MasterCard
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[30px] py-4 rounded shadow-bs w-[336px]">
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
                        alt="user_Four"
                      />
                    </div>
                    <div className="flex flex-col font-plusjakartasans items-start justify-start outline outline-[0.5px] outline-gray-300 rounded w-full">
                      <div className="flex flex-col items-start justify-start p-3 rounded w-full">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-full">
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
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-center w-full">
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
                            <div className="flex flex-col items-end justify-start mt-[5px] pr-5 w-full">
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
                              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
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
                        alt="user_Five"
                      />
                    </div>
                    <div className="flex flex-col font-inter gap-[33px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
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
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_robototoyfacefinal2.png"
                                alt="robototoyfacefi"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-900 text-sm w-full"
                                size="txtInterRegular14Bluegray900"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[214px] md:max-w-full text-base text-bluegray-900"
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
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_punktoyface1.png"
                                alt="punktoyfaceOne"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Blanker
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[214px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Create user flow for Data Projects
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_vangoghbyamrit1.png"
                                alt="vangoghbyamritOne"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Lee Ri
                              </Text>
                              <Text
                                className="text-base text-bluegray-900 w-full"
                                size="txtInterMedium16Bluegray900"
                              >
                                Revision design system
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_rarepepenakamototoyface.png"
                                alt="rarepepenakamot"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Jackson
                              </Text>
                              <Text
                                className="text-base text-bluegray-900 w-full"
                                size="txtInterMedium16Bluegray900"
                              >
                                Changelog Scan ID Card
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_tintin22.png"
                                alt="tintinTwentyTwo"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Yomaha
                              </Text>
                              <Text
                                className="text-base text-bluegray-900 w-full"
                                size="txtInterMedium16Bluegray900"
                              >
                                Pitching with client
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
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
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_robototoyfacefinal2.png"
                                alt="robototoyfacefi"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-900 text-sm w-full"
                                size="txtInterRegular14Bluegray900"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[214px] md:max-w-full text-base text-bluegray-900"
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
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_punktoyface1.png"
                                alt="punktoyfaceOne"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Blanker
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[214px] md:max-w-full text-base text-bluegray-900"
                                size="txtInterMedium16Bluegray900"
                              >
                                Create user flow for Data Projects
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                2min ago
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardThreePage;
